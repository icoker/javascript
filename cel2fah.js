var readlineSync = require('readline-sync');

var directions = ['F -> C', 'C -> F']
var conversionType = readlineSync.keyInSelect(directions, 'Which direction would you like to convert?')
function convertTemp () {
    if (conversionType == 0) {
        var degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
        var degreesNum = Number(degrees);
        var degreesCelsius = (degreesNum - 32) * (5 / 9);
        console.log('It is ' + degreesCelsius + ' degrees Celsius!');
    } else if (conversionType == 1) {
        var degrees = readlineSync.question('Enter degrees in Celsius: ');
        var degreesNum = Number(degrees);
        var degreesFahrenheit = degreesNum * 1.8 + 32;
        console.log('It is ' + degreesFahrenheit + ' degrees Fahrenheit!');
    }
}

convertTemp();