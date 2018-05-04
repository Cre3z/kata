// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5

// Let's assume that all numbers in the input will be integer values.

//my solution
function sumDigits(number) {
    return Math.abs(number).toString().split('').map(Number).reduce((a,b) => {return a + b;});
}

//other solutions
function sumDigits(number) {
    var str_num = "" + number;
    
    var result = 0;
    str_num.split('').forEach(function(el) {
      var digit = parseInt(el);
      if(isNaN(digit)) {
        return;
      }
      
      result += digit;
    });
    
    return result;
}

function sumDigits(n) {
    return n ? Math.abs(n%10) + Math.abs(sumDigits(~~(n / 10))) : 0;
}