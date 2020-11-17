//配列に型を指定することでそれ以外の型を入れるとエラーになる
const fruits: string[] = ['Apple','Banana'];

//数字を入れたい場合
const fruits_1: any[] = ['Apple', 'Banana',1];

//型を書かない場合（ユニオン型になる）
const fruits_2: any[] = ['Apple', 'Banana', 1];
