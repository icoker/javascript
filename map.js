"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#map
    map: (array, callback) => {
        array.forEach(function(element, i) {
            array[i] = callback(element);
        });
        return array;
    }
}

// Define a method that multiplies the input by 10
function multiplyBy10(value) {
  return 10 * value;
}
const value = _.map([1, 2, 3], multiplyBy10);

// value => [10, 20, 30]
console.log(value);