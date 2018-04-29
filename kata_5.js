// We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:

// 0 1 3 6 10 15 21 28 36 45 55 ....

// which is created by

// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

// Input:LastNumber
// Output: series and result

// Example:
// Input:> 6
// Output:0+1+2+3+4+5+6 = 21

// Input:> -15
// Output:-15<0

// Input:> 0
// Output: 0=0

//my solution
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let total = ""; let sum = 0;
      if(count < 0) { let total = count + '<' + 0; return total;}
      if(count === 0) { let total = count + '=' + 0; return total;}
      for(var i = 0; i <= count; i++){
        sum += i;
        if(i == 0) { total += i; }
        else if(i == count){ total += "+" + i + " = " + sum;}
        else { total += '+' + i;}
      }
      return total;
    };
  
    return SequenceSum;
  
})();

//other solutions
var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
})();

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      
      if (count > 0) return [...Array(count + 1).keys()].join('+') + ' = '+ count * (count + 1) / 2;
      if (count == 0) return '0=0';
      return count+'<0';
    };
  
    return SequenceSum;
  
})();