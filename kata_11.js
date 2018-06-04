// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//my solution
function duplicateCount(text){
    let unique_array = []; let duplicates = [];
    for(let i = 0;i < text.length; i++){
      if(unique_array.indexOf(text[i].toLowerCase()) == -1){
        unique_array.push(text[i]);
      } else {
        if(duplicates.indexOf(text[i].toLowerCase()) == -1){
          duplicates.push(text[i].toLowerCase());
        }
      }
    }
    return duplicates.length;
}

//other solutions
//1
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//2
function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

//3
function duplicateCount(text){
    return text
    .toLowerCase()
    .split('')
    .reduce(function(a, l) {
        a[l] = a[l] ? a[l]+1 : 1;
        if(a[l] === 2) a.count++;
        return a;
    }, {count:0}).count;
}