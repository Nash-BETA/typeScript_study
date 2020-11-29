class Person {

  constructor(public readonly name: string, protected age:number) {
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this:Person) {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

class Teacher extends Person{
  constructor(name: string, age: number, subject: string){
    //constructor関数を使う場合は親クラスを継承しているのでsuperを書かなければいけない
    super(name, age);
  }

  greeting() {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

const teacher = new Teacher('qui', 23, 'Math');
teacher.greeting();