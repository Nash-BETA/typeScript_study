let anithing:any =  true;
anithing = 1;
anithing = ['11', 33];
anithing = {};

//anyが絡む場合は型を気にしなくなるので下記の内容はエラーにならない
let test = 'ななな';
test = anithing;