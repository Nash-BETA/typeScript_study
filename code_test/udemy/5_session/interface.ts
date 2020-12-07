interface addFunc {
    (num1: number,num2:number): number;
}
let addFunc:addFunc;
addFunc = (n1:number, n2:number) => {
    return n1 + n2;
}

//?は合ってもなくてもいいよ！という処理
interface Nameable {
    readonly name: string;
    nickname?: string;
}
//インターフェイスの継承はextendsでできる
interface Human extends Nameable{
    age:number;
    greeting:(message:string) => void;
    greeting2(message: string):void;
}

const human:Human = {
    name: 'John',
    age: 22,
    greeting(message: string) {
        console.log(message);
    },
    greeting2(message: string) {
        console.log(message);
    }
}

//クラスの作成
//interfaceは複数,abstractは一つしか継承できない
//interfaceは処理をかける,abstractは処理をかけない
class DeveLoper implements Human{
    constructor(public name: string, public age: number, public experince:number){}
    greeting(message: string) {
        console.log(message);
    }
    greeting2(message: string) {
        console.log(message);
    }
}

const tmpDeveLoper = {
    name: 'John',
    age: 22,
    experince:3,
    greeting(message: string) {
        console.log(message);
    },
    greeting2(message: string) {
        console.log(message);
    }
}
const user:Human = new DeveLoper('tanaka', 22 ,3);
const tmp_user: Human = tmpDeveLoper;
//readonlyは変更できないよ！
tmp_user.name = 'test'