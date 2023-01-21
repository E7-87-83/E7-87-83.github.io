#!/usr/bin/perl
use v5.22.0;
use warnings;
use Time::Piece;

my $t = localtime;

die "Usage: perl update.pl [html filename] [Title] \n" if !defined($ARGV[0]);

say "<p><a href=\"", $ARGV[0] , "\">", $ARGV[1], "</a>, ", 
    $t->year, "." , length($t->mon) == 1? "0" : "", $t->mon, 
    ".", length($t->mday) == 1 ? "0" : ""  , $t->mday, "</p>";
