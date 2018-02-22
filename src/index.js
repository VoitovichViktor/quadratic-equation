module.exports = function solveEquation(equation) {
  var str = equation.replace(/ /g, '');
  var aReg = /(-?\d+)\*x\^2/i;
  var bReg = /\x\^2((\-|\+)?\d+)\*x/i;
  var cReg = /(-?\d+)$/i;
  
  var a = parseInt(str.match(aReg)[1]);
  var b = parseInt(str.match(bReg)[1]);
  var c = parseInt(str.match(cReg)[1]);

  var d = Math.pow(Math.abs(b), 2) - (4 * a * c);
  var x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  var x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

  var result = [x1, x2];

  if (x1 > x2) {
    result = [x2, x1]
  }
  
  return result;
}


