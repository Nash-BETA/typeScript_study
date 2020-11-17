function add(num1: number, num2: number): number {
    return num1 + num2;
}

//関数に型があっても、関数保持する変数に型があってもどっちでもOK（下の図はどっちにも型を入れている）
const anotherAdd: (n1: number, n2: number) => number = add;

//関数宣言はコロンで型をつける
const doubleNumber = (number) => number * 2;