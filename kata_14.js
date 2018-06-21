// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// a being 1, b being 2, etc.

// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

//my solution
function alphabetPosition(text) {
    const alphaBet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const result = [];
    for(let letter in text){
        if(alphaBet.indexOf(text[letter].toUpperCase()) != -1) {
          result.push(alphaBet.indexOf(text[letter].toUpperCase()) + 1);
        }
    }
    return result.join(' ');
}

//other solutions
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}

function alphabetPosition(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z]/g,'')
      .replace(/./g, c => c + " ")
      .replace(/[a-z]/g, c => c.charCodeAt(0) - 96)
      .trim();    
}