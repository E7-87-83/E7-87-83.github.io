v             The Weekly Challenge Week 140                                     
v             Task 2 Multiplication Table  (incomplete)   
>89*8+10p83*20p&30p&40p&50p060p180p111p99*9*9*21p30g40g*90p>>>>>>>>>>>>>v       
v<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   
vv<<<<@,"F"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<           
>>50g30g40g*`30g40g*10g`+|                                                      
 v<<<<<<<<<,"G"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<                    
 #                                                                              
v<<<<<<<<<<<<<<<<<                                                              
v>>>"H",60g30g1-`|                                                                
v^               #                                                                
v^<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<                                                
v              >>>60g1+60p170pv^                                                
v              v<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<             
v              v               #                                  ^             
v              >>>>>>>>>70g40g`|                                  ^             
v                              >70g60g*80g20gp80g1+80p70g1+70p"I",^             
>>120gg.220gg.320gg.420gg.520gg.620gg.720gg.820gg.920gg.25*20gg."P",@                                  






@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# $a10 -> const, 79
# $a20 -> const, 24
# $a30 -> $i
# $a40 -> $j
# $a50 -> $k
# $a60 -> control for outer for-loop
# $a70 -> control for inner for-loop
# $a80 -> control for input of list of numbers
# $a90 -> $i*$j
# $a11 -> iteror of last step
# $a21 -> "IT" of latest step, initial = 6561
# $a31 -> number of integers smaller than IT
# $a41 -> number of integers equal to IT
# $a71 -> $a24[$a11]
# $a24_1 to $a24_79  ARRAY of numbers to be sorted/handled

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

let s = number of integers in the ARRAY smaller than IT
let e = number of integers in the ARRAY equal to IT

{ replace IT by $a71  if s < k and s+e >= k and IT > $a71 } is equivalent to { replace IT by $a71 if s < k and s > k-e-1  and IT > $a71}
