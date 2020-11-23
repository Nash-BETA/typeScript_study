class Person {
    name:string;
    constructor(initName: string) {
        this.name = initName;
    }

  greeting() {
    console.log(`HELLO,${this.name}`)
  }

}