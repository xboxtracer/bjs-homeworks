'use strict'

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        // value = value * 1.5;
        if (value >= 100) {
            this._state = 100;
            return
        } else if (value < 0) {
            this._state = 0;
            return
        }
        this._state = value
    }
    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
};
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
};
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
};
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
};
class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    };
    findBookBy(type, value) {
        let bookToLook = null;
        this.books.forEach(elem => {
            Object.entries(elem).forEach(element => {
                if (element[0] === type && element[1] === value) {
                    bookToLook = elem;
                }
            });
        });
        return bookToLook
    }
    giveBookByName(bookName) {
        let bookToTake = null;
        this.books.forEach(function(item, index, array) {
            if (item.name === bookName) {
                bookToTake = array.splice(index, 1)[0]
            }
        });
        return bookToTake
    }
}

class StudentLog {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    // addGrade(grade, subject) {
    //     console.log(grade, subject)
    // }
}