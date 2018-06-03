// Given a number, return a string with dash'-'marks before and after each odd integer, 
// but do not begin or end the string with a dash mark.

// Ex: dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

//my solution
function dashatize(num) {
    if(num === 0) { return num.toString();}
    if(!Number.isInteger(num)) { return "NaN";}
    let test = Math.abs(num).toString().split("").map((x, index) => {
      if(x % 2 === 0){
        return x;
      } else {
        return "-"+x+"-";
      }
    }).join("").split("");
    
    test[0] == "-" ? test.shift():test = test;
    test[test.length - 1] == "-" ? test.pop():test = test;
    
    return test.join("").replace(/--/g, "-");
};

//other solutions
//1
function dashatize(num) {
    return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
}

//2
function dashatize(num) {
    return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};

function dashatize(num) {
    let numStr = addDashes(num.toString());
    return stripDashes(numStr);
  };
  
function addDashes(str) {
    return str.replace(/([13579])/g, '-$1-');
}

function stripDashes(str) {
    return str.replace(/--/g, '-').replace(/^-|-$/g, '');
}

//3
function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
};
