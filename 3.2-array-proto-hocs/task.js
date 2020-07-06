'use strict'

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
      console.log(1)
  }
}

function sum(...args) {
    sleep(200);
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
    return function(...arg) {
        if (memory.length !== 0) {
            let condition = 0;
            for (let i = 0; i < memory.length; i++) {
                for (let j = 0; j < arg.length; j++) {
                    if (arg[j] === memory[i].args[j]) {
                        condition++
                    }
                    if(arg.length === condition) {
                        return memory[i].result
                    }
                }
            }
        }
        memory.push({args: arg, result: fn(...arg)});
        return fn(...arg)
    }
}

// const mSum = memorize(sum, 5);
// const mMux = memorize((a,b) => a * b, 10)

// mSum(3, 4);
// mSum(3, 4);
// mMux(2, 4);