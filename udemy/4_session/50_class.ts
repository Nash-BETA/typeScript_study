class PersonClass {
  name:string;
  age:number;
  constructor(initName: string,initAge:number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this:PersonClass) {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

const per = new PersonClass('nakayama',30);
per.greeting();
per.incrementAge();
per.greeting();