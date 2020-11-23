"use strict";
//enum(列挙型)
//文字列じゃなくても良い
//enumについては大文字で書くことが多い
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(coffee);
// enum型にそぐわないので代入できない
coffee.size = 444;
//代入できる
coffee.size = CoffeeSize.GRANDE;
