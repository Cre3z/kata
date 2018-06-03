// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//my solution
function reverseLetter(str) {
    return str.replace(/[^a-z]/gi,"").split("").reverse().join("");
    
}

//other solutions
function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}

function reverseLetter(str) {
    return str.match(/[a-z]/ig).reverse().join('');
}