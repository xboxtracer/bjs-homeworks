String.prototype.isPalindrome = function() {
    return this.valueOf().toLowerCase().replace(/ /g, '').split('').reverse().join('') === this.valueOf().toLowerCase().replace(/ /g, '')
};

function getAverageMark(marks) {
    let averageMark = 0;
    if (typeof marks[0] !== 'number') {
        return averageMark
    }
    marks.forEach(element => {
        averageMark += element
    });
    
    return Math.round(averageMark / marks.length)
}

function checkBirthday(birthday) {
    let today = new Date();
    let bd = new Date(birthday)
    return ((today - bd) / 1000 / 60 / 60 / 24 / 30 / 12) > 18 ? true : false
}