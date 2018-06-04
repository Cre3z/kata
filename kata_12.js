// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

//my solution 
function presses(phrase) {
    //increments of 3 or 4
    const keys = ['1ADGJMPTW ', 'BEHKNQUX0', 'CFILORVY', 'SZ234568', '79'];
    let count = 0;
    for(var i = 0; i < phrase.length; i++){
      keys.forEach(function(a, index){
        if(a.indexOf(phrase[i].toUpperCase()) > -1) count+= index + 1;
      })
    }
    return count;
}

// other solutions
//1
function presses(phrase) {
    var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
        phrase = phrase.toUpperCase().split(''),
        total = 0;
    
    phrase.forEach(function(l) {
      var key = chunks.filter(function(c) {
        return c.indexOf(l) > -1;
      })[0];
      total += key.indexOf(l) + 1;
    });
    
    return total;
}

//2
function presses(phrase) {
    var counter = 0;
    phrase.split('').map(function(a,b){
      a.match(/[adgjmptw\,1\*\#\s]/gi)? counter += 1  : 
      a.match(/[behjnqux0]/gi)? counter += 2 :
      a.match(/[cfilorvy]/gi)? counter += 3 :
      a.match(/[sz234568]/gi)? counter += 4 : 
      a.match(/[79]/g)? counter += 5 : counter = 0;
    });
    return counter; 
}