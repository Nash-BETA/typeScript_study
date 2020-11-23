"use strict";
function add(num1, num2) {
    return num1 + num2;
}
//関数に型があっても、関数保持する変数に型があってもどっちでもOK（下の図はどっちにも型を入れている）
var anotherAdd = add;
//関数宣言はコロンで型をつける
var doubleNumber = function (number) { return number * 2; };
