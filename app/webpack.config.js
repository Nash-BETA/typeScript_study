//'path'corenodejsの内蔵されているモジュール
const path = require('path');

module.exports = {
    //webpack始まりの部分
    entry: './dist/main.js',
    //出力されるファイル名
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
