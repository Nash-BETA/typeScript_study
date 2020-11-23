// 列挙型
// Signal

enum Signal{
    Red, // 0
    Blue = 10,
    Yellow  // 11になる
}

var result: Signal;
console.log(Signal[11]); // Yellow
console.log(Signal[10]); // Blue