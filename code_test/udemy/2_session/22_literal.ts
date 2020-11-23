//リテラル型はそのものしか入れられない
const apple : 'apple' = 'hello';

//constで定義するとリテラル型になる
const test = 'test'
let test_2 = 'test_2'


let clothSize : 'small' | 'midium' | 'large' = 'large'

const cloth:{
    coler: string;
    size:'small' | 'midium' | 'large'
} = {
    coler: 'red',
    size: clothSize
}

//enumとの違い。
//関数ではないのでリテラル型はアクセスできない