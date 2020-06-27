'use strict'

function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);
    if (d < 0) {
        return `{ D: ${d}, roots: [  ] }`
    } else if (d === 0) {
        let x1 = (- b) / (2 * a)
        return `{ D: ${d}, roots: [ ${x1} ] }`
    } else if (d > 0) {
        // let x1 = (-b + √D) / 2a
        // let x2 = (-b - √D) / 2a
        return `{ D: ${d}, roots: [ ${x1} , ${x2} ] }`
    }
}