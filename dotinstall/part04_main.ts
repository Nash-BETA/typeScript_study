// 型

// number
// string
// boolean
// any

//変数に型だけを指定
var i: number;
//型推論と言われており、数値を代入する際に型をかく
var i: number = 10;


//型を指定していなければany型になる(PHPのように動的に動くわけではない)
var x;
x = 10;
x = 'hello';

//配列
var arr: number[];
arr = [10,5,2];