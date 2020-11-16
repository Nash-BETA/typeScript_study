
//enum(列挙型)
//文字列じゃなくても良い
//enumについては大文字で書くことが多い
enum CoffeeSize{
    SHORT,
    TALL,
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
console.log(coffee)
// enum型にそぐわないので代入できない
coffee.size = 444;

//代入できる
coffee.size = CoffeeSize.GRANDE;
