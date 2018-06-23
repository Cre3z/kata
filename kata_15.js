// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//my solution
function isSortedAndHow(array) {
    if(isAscending(array)) { return "yes, ascending" } 
    else if(isDescending(array)){return "yes, descending"}
    else { return "no"}
}
  
function isAscending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x >= arr[i - 1];
    });
}
  
function isDescending(arr) {
    return arr.every(function (x, i) {
        return i === 0 || x <= arr[i - 1];
    });
}

//other solutions
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

function isSortedAndHow(array) {
    var asc = 1, desc = 1;
    for (var i=1; i<array.length; i++) {
      asc *= array[i]>=array[i-1];
      desc *= array[i]<=array[i-1];
    }
    return asc ? 'yes, ascending' : desc ? 'yes, descending' : 'no';
}

function isSortedAndHow(array) {
    let sign = Math.sign(array[1]-array[0]);
    for( let a=2; a < array.length; a++ ){
      if( Math.sign(array[a]-array[a-1]) == -sign ) return "no"
    }
    return sign < 0 ? "yes, descending" : "yes, ascending"
}