//function for balancing braces
function parentheses(value) {
  if (value.length <= 1)
    return false;

  let matchingOpeningBracket, x, resultStack = []

  let open = ['[', '{', '('];
  let close = [']', '}', ')'];

  for (let i = 0; i < value.length; i++) {
    x = value[i]

    if (close.indexOf(x) > -1) {
      matchingOpeningBracket = open[close.indexOf(x)]
      if (resultStack.length == 0 || (resultStack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      resultStack.push(x)
    }
  }

  return (resultStack.length == 0)
}

const values = ["[(])", "[()]{}{[()()]()}"];

function checkbalance() {
  for(let value of values){
    if(parentheses(value)) {
      console.log('YES');
    } else {
      console.log('NO')
    }
  }
}

checkbalance();

//function for date formats from ordinal numbers
function formatDate(){
  var date = "20th Oct, 2015";
  console.log(new Date(date.replace(/(\d+)(st|nd|rd|th)/, "$1")).toISOString().slice(0, 10));
}

formatDate();