'use strict'

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
      console.log(1)
  }
}

function sum(...args) {
    sleep(200);
    console.log(...args)
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    function isLog(elem, index, array) {
        if(array.length !== arr2.length) {
            return false
        }
        return elem == arr2[index]
    }
    return arr1.every(isLog)
}

function memorize(fn, limit) {
    const memory = [];
    memory.push
    return fn
}