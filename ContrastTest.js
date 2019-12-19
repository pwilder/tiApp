const bestContrast  = require('get-best-contrast-color').default;
const possibleContrast = ['#FFFFFF', '#000000'];
console.log(bestContrast('#FFFFFF', possibleContrast));