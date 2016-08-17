# React.js

JavaScriptで書かれたライブラリ。react.jsをインクルードして使う。  
（MVCで言うところの）Viewのみを担当する。  
JavaScriptのコード中に（PHPの様に）「HTMLタグ(っぽいもの)」を書ける。

```js
return (

  <div className="commentForm">

    Hello, world! I am a CommentForm.

  </div>

);
```

この「HTMLタグ（っぽいもの）」はJavaScriptのシンタックスではエラーになるので実行する前にJavascriptに変換する。  
変換は実行直前の自動変換も、事前の静的な変換も可能。前者はJSXTransformer.jsをインクルードすることで、後者はjsxコマンドで実施。  
jQueryと共存できる。
