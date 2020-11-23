
//関数に型を持たせる
function add(num1:number ,num2:number):number{
    return num1 + num2;
}

//型推論において引数はanyになるので型は書いた方が良い
function aff(num1, num2) {
    return 'aaa';
}

//結論関数は型をつけよう