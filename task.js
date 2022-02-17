//Задание 1
class PrintEditionItem { 
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;   
    }

    fix() {
        this.state *= 1.5;
    }

    set state(status) {
        if (status < 0) {
            this._state = 0;
        } else if (status > 100) {
            this._state = 100;
        } else {
            this._state = status;
        }
    }

    get state() {
        return this._state; 
     }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";   
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) return this.books[i];
            }
        return null;
    }  

    giveBookByName(bookName) {
        let book = this.findBookBy("name", bookName);
        if (book != null)
           this.books.splice(this.books.indexOf(book), 1);      
        return book;
    }
}

//Задание 3
class Student{
    constructor(name){
      this.name = name;
      this.subjects = [];
    }
    
    addMark(mark, subjectName) {
      if (mark < 1 || mark > 5) return 'Ошибка, оценка должна быть в диапазоне от 1 до 5';
      if (this.subjects[subjectName] === undefined) {
        this.subjects[subjectName] = [mark] 
      }  
      else {
        this.subjects[subjectName].push(mark);
      }
      
    }
    
    getAverageBySubject(subjectName) {
      if (this.subjects[subjectName] === undefined) return "Несуществующий предмет";
      let sum = 0;
      this.subjects[subjectName].forEach(item => sum += item);
      return sum / this.subjects[subjectName].length;
    }
    
    getAverage() {
        let sum = 0;
        let marksAmount = 0;
        let subjectNames = Object.keys(this.subjects);
        subjectNames.forEach(item => {
        sum += this.getAverageBySubject(item) * this.subjects[item].length;
        marksAmount += this.subjects[item].length;
        });
        return sum / marksAmount;
    }
    
    exclude(reason) {
      delete this.subjects;
      this.excluded = reason;
    }
  }