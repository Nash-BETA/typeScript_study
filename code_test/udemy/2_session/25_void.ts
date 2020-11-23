//何も返さない場合はvoid型にする
function sayHello():void{
    console.log('HELLO');
}

function sayHelloTest(): undefined {
    console.log('HELLO');
    return;
}

//void returnがあってもなくても使える
//undefinedはrturnがなくちゃ使えない ←普通は使わない

console.log(sayHello());