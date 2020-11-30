//'path'corenodejsの内蔵されているモジュール
const path = require('path');

module.exports = {
    mode: 'development',
    //webpackにするファイル
    entry: './src/food-app/main.ts',
    //出力されるファイル名
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //webpack-dev-serverのメモリで持つファイルのパスを設定できる
        publicPath: '/dist/'
    },
    //モジュールの設定
    module :{
        rules:[{
            test: /\.ts$/,
            use:'ts-loader',
            exclude: /node_modules/
        }]
    },
    //拡張子がなかった時に拡張子を付けてくれる
    resolve:{
        //左から順にファイルの検索をしてくれる
        extensions:['.ts','.js']
    }
}
