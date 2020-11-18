"use strict";
// 列挙型
// Signal
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 10] = "Blue";
    Signal[Signal["Yellow"] = 11] = "Yellow"; // 11になる
})(Signal || (Signal = {}));
var result;
console.log(Signal[11]); // Yellow
console.log(Signal[10]); // Blue
