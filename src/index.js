module.exports = function solveEquation(equation) {
	var regexp = /(((- )?|(-)?)\d+)/g;
  var array = equation.match(regexp);
	
	var a = convertToNumber(array[0]);
	var b = convertToNumber(array[2]);
	var c = convertToNumber(array[3]);

  var d = Math.pow(b,2) - 4 * a * c;	
	var x1 = (((-1 * b) - Math.sqrt(d))) / (2 * a);	
	var x2 = (((-1 * b) + Math.sqrt(d))) / (2 * a);	
  
  var solutions = [];
  var solutions = solutions.concat(Math.round(x1), Math.round(x2));	
  var solutions = solutions.sort(compareNumbers);

  return solutions;
}
  
function convertToNumber(str) {
  if (isNaN(str)) {
    var regexp = /\d+/;
    var tmp = (str.match(regexp))
    var number = + tmp[0] * -1;
    return number;
  } else {
    var number = +str;
    return number;
  }
}

function compareNumbers(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
