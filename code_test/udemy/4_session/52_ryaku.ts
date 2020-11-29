class PersonCon {

  constructor(public name: string, private age:number) {
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this:PersonCon) {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

const pers = new PersonCon('nakayama',30);
per.greeting();
//per.age = 50;
per.incrementAge();
per.greeting();