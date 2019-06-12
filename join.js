"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
    join: (array, separator = ',') => {
        // write code to implement method here
        var text = "";
        array.forEach(function(element, i) {
            text += element;
            i < array.length - 1 ? text += separator : text;
        });
        return text;
    }
}


const value = _.join(["hello", "goodbye", "hello", "goodbye"], ", ")

console.log(value);