#!/usr/bin/perl
# This is a workable version
# gonna debug for: perl pwc154-padovan-mce.pl 10 11


use v5.22.0;
use warnings;
use Math::BigInt;

use Time::HiRes qw(gettimeofday tv_interval);
my $time_start = [gettimeofday];



my $NUM_OF_TERMS = $ARGV[0] || 10;
my $MAX_NUM_OF_SEARCHES = $ARGV[1] || 26;

die "The search parameter is too small.\n" 
    if $MAX_NUM_OF_SEARCHES < $NUM_OF_TERMS;

use Math::Prime::Util ':all';

use MCE;
$| = 1;
 
my $NWORKERS = 4;

prime_precalc(10_000_000);


sub pdv_n {
   my ($n, $pdvstate) = @_;
   @$pdvstate = (2, Math::BigInt->new(1), Math::BigInt->new(1), Math::BigInt->new(1), Math::BigInt->new(2))
      unless defined $pdvstate->[0];
   my ($curn, $a, $b, $c, $d) = @$pdvstate;
   if ($n >= $curn) {
        do { ($a, $b, $c, $d) = ($b, $c, $d, $b+$c); } for (1 .. $n-$curn);
        @$pdvstate = ($n, $a, $b, $c, $d);
        return [$c, $d];
    }
    return undef;
}
 
sub nth_iter {
   my ($n, $tmp) = (0, {});
   return sub {
      if (defined $tmp && keys %$tmp < $MAX_NUM_OF_SEARCHES) {
         return $tmp->{$_[0]} = $_[1];
      }
      else {
         if (defined $tmp) {
            $tmp->{$_[0]} = $_[1];
            my $previous_term = 0;
            for my $nth (sort { $a <=> $b } keys %$tmp) {
                my ($Pk, $time_int) = @{ $tmp->{$nth} };
                next if $Pk->beq($previous_term);
                $previous_term = $Pk;
                say $Pk;
                $n++;
                if ($n >= $NUM_OF_TERMS) {
                    say "\nDONE";
                    exit;
                }
            }
            return undef $tmp;       # not letting the list print out too fast
         }
      }
   }
}
 
my $mce = MCE->new(
   max_workers => $NWORKERS, gather => nth_iter,
   user_func => sub {
      my @pdvstate; my $nth = MCE->wid();
      while (1) {
         my $k = $nth;
         next if !defined(pdv_n($k, \@pdvstate));
         for my $Pk ( pdv_n($k, \@pdvstate)->@* ) {
            if (is_prob_prime($Pk)) {
                MCE->gather($nth, [ $Pk, tv_interval($time_start) ]);
            } 
         }
         $nth += $NWORKERS;
      }
   }
)->run;

# $mce->shutdown ---- not working
