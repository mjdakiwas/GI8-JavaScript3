class Person { // this is an object
    constructor(name, job, age) {
        this.name = name; // this is a property
        this.job = job;
        this.age = age;
    }

    exercise() { // this is a method
        console.log('All I need in life is a treadmill.');
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages, busy = true) {
        super(name, job, age); // must explicitly use super() to call parent class constructor (i.e. Person)
        this.busy = busy;
        this.languages = languages;
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy = false) {
            console.log(`${this.name} would love to take on a new responsibility.`);
        } else {
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
    }

    learnLanguage(language) {
        let languages;
        for (let language of this.languages) { // adds space between languages for better readability
            languages += `, ${language}`;
        }
        // this.languages += language;
    }

    listLanguage() {
        return this.languages;
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();