function parseCount(value) {
    if(!Number.parseInt(value)) {
        throw new Error('Невалидное значение')
    }
    let outValue = Number.parseInt(value)
    return outValue
}

function validateCount(value) {
    try {
        parseCount(value)
    } catch(e) {
        return e
    };
    return parseCount(value)
}

class Triangle {
    constructor(a, b, c) {
        if(a + b < c) {
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
        new Triangle(a, b, c)
    } catch(e) {
        console.log(e)
        throw e
    } finally {
        return new Triangle(a, b, c)
    }
}