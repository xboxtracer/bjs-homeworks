'use strict'

function showSolutionsMessage(a, b, c, d, x1, x2) {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${d}`);
    if (d < 0) {
        console.log('Уравнение не имеет вещественных корней')
    } else if (d === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`)
    } else if (d > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`)
    }
}

function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);
    let result = {D: d, roots: []};
    if (d === 0) {
        let x1 = (- b) / (2 * a)
        result.roots[0] = x1
    } else if (d > 0) {
        let x1 = (- b + Math.sqrt(d)) / (2 * a)
        let x2 = (- b - Math.sqrt(d)) / (2 * a)
        result.roots[0] = x1
        result.roots[1] = x2
    }
    showSolutionsMessage(a, b, c, d, result.roots[0], result.roots[1]);
    return result
}

function getAverageMark(marks) {    
    let avg = 0;
    let i = 0;
    for (let key in marks) {
        avg += marks[key];
        i++
    };
    if (i === 0) {
        i++
    }
    avg = avg / i;
    return avg
}
function getAverageScore(data) {
    let avgMarks = {}
    for (let key in data) {
        avgMarks[key] = getAverageMark(data[key]);
    };
    avgMarks.average = getAverageMark(avgMarks)
    return avgMarks
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго'
    } else {
        return 'Эмильо'
    }
}

function getPersonData(secretData) {
    let a = []
    let i = 0;
    for (let key in secretData) {
        a[i] = getDecodedValue(secretData[key]);
        i++;
    }
    let pirateName = {firstName: a[0], lastName: a[1]};
    return pirateName
}