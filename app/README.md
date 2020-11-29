# typeScript_study



セッション3以降メモとして下記に記載
## session3

### コンパイラを使う方法

#### watchモード
 + 自動的にTSからJSにコンパイルする方法
 + tsc udemy/3_session/33_watch.ts -w の様に後ろに -w で自動化する事ができる
 ※ errorが出ていてもコンパイルはされるので注意

#### tsc --initでtscconfig.jsonを作成
 + 複数のファイルをコンパイルする
   + tsc 33_watch.ts 34_config.ts
     + 上記の様にファイルを書くごとにスペースを入れると複数可能
   + 「tsc」と打つと全てのファイルをコンパイルする(細かくはtscofig.jsonで設定できる)
     + 「tsc」はtscofig.jsoを参照してコンパイルされる
       + rootdirで「tsc --init」とコマンドを打つと「tscofig.json」が生成される
       + 「tsc」以外のコマンドではtscofig.jsonは参照されない
       ※ 「tsc (ファイル名)」ではtscofig.jsonの設定は見ない
       ※ 「tsc -w」tscコマンドのオプションには使える

#### tscconfig.jsonの設定includ,exclud,filesを使用
 + コンパイルするファイルを選ぶ
   + 設定項目について
     + include
       + 指定したファイルのみコンパイルする様になる
       + 記入がない場合は全てのファイルが対象(&filesに記載がない場合)
     + exclude
       + 記述したファイルを除く
       + 記載する場合は「node_modules」の記述は必ず必須（書いていない場合はnode_modulesを追加しなくていい）
     + 両方書いた場合はincludeの中でexcludeを省いたもののみコンパイルする
     + files
       + 相対パスを記入する事で対象に含める
       + excludeに記載されている内容でもコンパイルされる
       + 例外的な利用かな？
   + 記述方法について
     + ファイル名をそのまま描く
       + "index.ts",
     + ワイルドカードで含める
       + "*.index.ts",
     + ディレクトリは記載が必須(書かない場合はrootdirのファイルしか適用されない)
       + "udemy.3_session/33_watch.ts",
     + 全ての同じファイル名をコンパイルさせたくない時
       + "**/index.ts",

#### targetを指定
 + 指定したJSのバージョンにコンパイル
   + デフォルトではes3に変換される

#### libを指定
 + 指定されていないデフォルトはtargetの内容を元に自動に設定される
 + TSが用意している型の定義を追加（型の定義ライブラリ）
   + libの中を空にするとDOMが使えなかったり型ごとに設定されている関数が使えない

#### allowJs,checkJs,jsx,declaration,declarationMapの設定
 + allowJs
   + jsファイルをtsファイルにコンパイルするか、しないかの許可
 + checkJs
   + jsファイルをコンパイルする時にerrorが出すか、出さないかの許可
  + jsx
    + reactの時に使うので今回はスキップ
  + declaration,declarationMap
    + 型定義ファイルが出力させるか、させないかの許可

#### SourceMap
 + ブラウザでTSを操作する
   + trueにする事でコンパイルした際に*.js.mapという拡張子のファイルが生成されてコンソールログ内のソースタブにtsファイルが生成される
     + ブレイクポイントなど使えブラウザで開発する事ができる

#### outDir,rootDir,removeComments,noEmit,downlevelIteの設定
 + outDir
   + コンパイルされたファイルの保存ディレクトリを指定する
     + コンパイルするファイルのディレクトリーが一箇所の時は指定したフォルダのrootdirになる
 + rootDir
   + 指定した場合はディレクトリー構造を必ず出してくれる
 + removeComments
   + コメントアウトを自動で消してくれる
 + noEmit
   + コンパイルせずに型チェック(errorの確認)のみしてくれる
 + downlevelIte
   + 反復処理で正しくコンパイルされなかった時に使うと正しく出力される
     + ただし文章量は増えるのでデフォルトはコメントアウト状態

#### noEmitOnError
 + noEmitOnError
   + エラーが出た時はコンパイルしない
   + デフォルトでは記述されていない

#### noImplicitAnyやstrictNullChecks
 + コードの厳しさの設定
 + strictのtrue
   + "rict","noImplicitAny","strictNullChecks","strictFunctionTypes","strictBindCallApply","strictPropertyInitialization","noImplicitThis", "alwaysStrict"の全てがtrueになる
 + noImplicitAny
   + 暗黙的なエラーの許可(true→許可しない)
   + 関数の場合にのみ反映され、変数は対象外
 + strictNullChecks
   +stringのnullの許容設定

#### 綺麗なコードを各設定
 + noUnusedLocals(デフォルトはfalse)
   + trueにすると使っていない変数にエラーが出る
   + グローバル変数ではエラーは出ない
 + noUnusedParameters
   + インスタンス化などメソッドを読んだ時にパラメータがおかしければエラーを出す
 + noImplicitReturns
   + 暗黙的なリターンはエラーを吐く



## sesion4

### オブジェクト指向プログラミング
  + 現実世界のものに見立ててプログラミングする
  + アプリケーションを作る手法の一つ
  + 人間にとってわかりやすいロジックを分割する方法1つ

#### オブジェクト
  + 作る方法
    + オブジェクトリテラル
    + class

## ローカルサーバー
### serveを使うと簡単にローカルサーバーが立つ
 +  npm install -g serve
    +  インストール
 + 「serve」でローカルが立ち上がる

## webpack
###
 + npm install --save-dev webpack webpack-cli
   + インストール