//union型
let union : number | string = 100;
//型が決まっていないのでstringを必要とする関数は使えない
union.toUpperCase();

union = 'aa';
//string型が入った為、使える
union.toUpperCase();

let unionArr :(number|string)[] = ['aaa',21]