const person_test: object = {
    name : 'Jack',
    age : 21
}
//アクセスできない
//オブジェクト全体を表している
// console.log(person_test.name);

Object.create

const person= {
    name: {
        first:'Jack',
        last:'Sumth'
    },
    age: 21
}
