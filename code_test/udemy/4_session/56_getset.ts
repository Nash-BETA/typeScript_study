class Personn {

  constructor(public readonly name: string, protected age:number) {
  }

  incrementAge(){
    this.age += 1;
  }

  greeting(this:Personn) {
    console.log(`HELLO,${this.name}. i'm ${this.age} years`)
  }
}

class Teacherr extends Personn{
  //値の取得
  get subject(){
    if(!this._subject){
      throw new Error('erroorr');
    }
    return this._subject
  }

  set subject(value){
    this.subject = value;
  }
  constructor(name: string, age: number, private _subject: string){
    //constructor関数を使う場合は親クラスを継承しているのでsuperを書かなければいけない
    super(name, age);
  }

  greeting() {
    console.log(`HELLO,${this.name}. i'm ${this.age} years${this.subject}`)
  }
}

const teacherr = new Teacherr('qui', 23, 'Math');
teacherr.subject
teacher.greeting();