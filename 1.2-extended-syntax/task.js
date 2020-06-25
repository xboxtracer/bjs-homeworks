'use strict';

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    const d = (b * b) - (4 * a * c);
    let x1 = (0 - b + Math.sqrt(d)) / (2 * a);
    let x2 = (0 - b - Math.sqrt(d)) / (2 * a);
    let x;
    if (d < 0) {
        x = [];
    } else if (d === 0) {
        x = [x1];
    } else {
        x = [x1, x2];
    };
    return x
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0;
    if(marks.length <= 0) {
        return 0;
    } else if (marks.length > 5) {
        marks = marks.slice(0, 5);
    };
    for (let numb of marks) {
        sum += numb;
    };
    let averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let today = new Date();
    let old = today.getFullYear() - dateOfBirthday.getFullYear();
    let result;
    old >= 18 ? result = `Не желаете ли олд-фэшн, ${name}?` : 
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}