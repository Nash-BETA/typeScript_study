//'path'corenodejsの内蔵されているモジュール
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    mode: 'production',
    //webpackにするファイル
    entry: './src/food-app/main.ts',
    //出力されるファイル名
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
    },
    plugins:[
        //buildした際に不要になるファイルを削除してくれる
        new CleanWebpackPlugin()
    ]
}
