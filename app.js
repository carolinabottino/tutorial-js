const amanda_calculate = require('./amanda.js');
const tyler_calculate = require('./tyler.js');
const carolina_calculate = require('./carolina.js');
const chango_calculate = require('./chango.js');

console.log(amanda_calculate(1, 2, 5)); // logs 31
console.log(tyler_calculate(2)); // logs 33.510321638291124
console.log(carolina_calculate.geometricSum(1, 2, 5)); // logs 31
console.log(carolina_calculate.quadraticFormula(1, 2, -15)); // logs [ 3, -5 ]
console.log(chango_calculate.geometricSum(1, 2, 5)); // logs 31
console.log(chango_calculate.quadraticFormula(1, 2, -15)); // logs [ 3, -5 ]
