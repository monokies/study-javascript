# Babel

## Babelとは
* ECMAScriptコンパイラ
* ES6やES7などで書かれたソースコードをES5の形式に出力することができる
* ブラウザがまだ対応していない仕様を先取りできるので便利
* オンラインでトランスパイルしてくれるサービス：https://babeljs.io/repl/

```
# ES6のコード
const obj = (() => {
  return {
    method() {
      alert('Hello Babel!');
      }
  };
})();
```

* 特徴
    * ECMAScript標準仕様をベースにしている
