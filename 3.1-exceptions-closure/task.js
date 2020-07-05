'use strict'

function parseCount(value) {
    let parsVal = Number.parseInt(value)
    if(!parsVal) {
        throw new Error('Невалидное значение')
    }
    return parsVal
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch(e) {
        return e
    };
}

class Triangle {
    constructor(a, b, c) {
        if(a + b < c || c + b < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a
        this.b = b
        this.c = c
    }
    getPerimeter() {
        return this.a + this.b + this.c
    }
    getArea() {
        let p = this.getPerimeter() / 2
        let area = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3)
        return +area
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch(e) {
        console.log(e)
        throw e
    }
}

const triangle = getTriangle(1,3,100);
triangle.getArea()