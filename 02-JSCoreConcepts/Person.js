
class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }

    getInitials() {
        return `${this.getFirstUpperCaseLetter(this.name)}.${this.getFirstUpperCaseLetter(this.surname)}.`
    }


    getFirstUpperCaseLetter(str) {
        return str.charAt(0).toUpperCase();
    }
}

const JanNowak = new Person('Jan', 'Nowak');
console.log(JanNowak.getInitiali)
