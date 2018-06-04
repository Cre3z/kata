// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,

// output: number as a string

//my solution
function mxdiflg(a1, a2) {
    if(a1.length == 0 || a2.length == 0){ return -1;}
    const l1 = a1.map(x => x.length)
    const l2 = a2.map(x => x.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
    
}

//other solutions
//1
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

//2
function mxdiflg(a1, a2) {
    var max = -1;
    for(var A1 of a1)
      for(var A2 of a2)
        max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
}

//3
function mxdiflg(a1, a2) {
    return (a1 && a1.length && a2 && a2.length)
      ? Math.max(Math.abs(max(a1) - min(a2)), Math.abs(max(a2) - min(a1)))
      : -1;
  
    function max(a) {
      return a.reduce((b, c) => { return  (b > c.length) ? b : c.length; }, 0);
    }
    
    function min(a) {
      return a.reduce((b, c) => { return  (b < c.length) ? b : c.length; }, a[0].length);
    }
}