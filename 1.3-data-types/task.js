'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount;
    if (typeof percent === 'number' && typeof contribution === 'number' && typeof amount === 'number') {
        let s = amount - contribution;
        let p = (percent / 100) / 12;

        let today = new Date;
        let years = (date.getFullYear() - today.getFullYear());
        let n = date.getMonth() - today.getMonth() + years * 12;
        
        let a = Math.pow(1 + p, n)
        let d = p / (a - 1)
        let monthPayment = s * (p + d)
        let allPayment = monthPayment * n;

        totalAmount = + allPayment.toFixed(2);
        console.log(3453)
    } else {
        console.log('Параметр <название параметра> содержит неправильное значение <значение параметра>')
        return 
    }
    return totalAmount;
};

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let outName = 'Аноним';
    if (typeof name === "string") {
        if (name.length === 0) {
            outName = 'Аноним';
        } else {
            for (let i = 0; i < name.length; i++) {
                if ('ёйцукенгшщхъфывапролджэячсмитьбю'.indexOf(name[i].toLowerCase()) === -1) {
                    outName = 'Аноним';
                } else {
                    outName = name;
                };
            };
        };
    };
    let greeting = `Привет, мир! Меня зовут ${outName}`;
    return greeting;
};