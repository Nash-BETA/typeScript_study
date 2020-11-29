//readonlyを使うことで変数を書き換えられなくする

class PersonClasss {

  public readonly id: number = 32;
  constructor(public readonly name: string, private age:number) {
    //construct内ではreadonlyを書き換えられる
    this.id = 33;
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this:PersonClasss) {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

const personn = new PersonClasss('nakayama',30);
personn.greeting();
personn.incrementAge();
console.log(personn.id);
personn.greeting();