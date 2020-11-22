class Person {
    name:string;
    constructor(initName: string) {
        this.name = initName;
    }
}

const nakayama = new Person('nakayama');
console.log(nakayama);