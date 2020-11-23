"use strict";
//配列に型を指定することでそれ以外の型を入れるとエラーになる
var fruits = ['Apple', 'Banana'];
//数字を入れたい場合
var fruits_1 = ['Apple', 'Banana', 1];
//型を書かない場合（ユニオン型になる）
var fruits_2 = ['Apple', 'Banana', 1];
