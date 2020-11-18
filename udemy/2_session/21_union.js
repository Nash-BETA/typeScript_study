"use strict";
//union型
var union = 100;
//型が決まっていないのでstringを必要とする関数は使えない
union.toUpperCase();
union = 'aa';
//string型が入った為、使える
union.toUpperCase();
var unionArr = ['aaa', 21];
