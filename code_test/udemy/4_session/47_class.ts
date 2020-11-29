class Perso {
    name:string;
    constructor(initName: string) {
        this.name = initName;
    }
}

const nakayama = new Perso('nakayama');
console.log(nakayama);