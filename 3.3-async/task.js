'use strict'

class AlarmClock {
    constructor(id) {
        this.alarmCollection = [],
        this.timerId = id
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text')
        }
        if (this.alarmCollection.forEach(elem => console.log(elem.id === id))) {}
        console.log(this.alarmCollection.forEach(elem => console.log(elem.id === id)))
        this.alarmCollection.push({time, callback, id})
    }
};
