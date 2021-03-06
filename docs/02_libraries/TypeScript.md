# TypeScriptとは
http://www.typescriptlang.org/play/

* オープンソースなプログラム言語。 altJS
* マイクロソフトが開発
* JavaScriptと互換性を持つ。既存コードから開発をスタートできる。
* クラスを簡単に記述できる
* 静的型付け⇔JavaScriptは動的型付け

## 型注釈
```js
var hoge:string;

var hoge:string = "hoge";
hoge = 0; // エラー
```
JavaScript
```js
function getBMI(weight, tall) {
  return weight / (tall * tall);
}
var b = getBMI("a", "b"); // 結果はNaN
```
TypeScript
```js
function getBMI(weight: number, tall: number) {
  return weight / (tall * tall);
}
var b = getBMI("a", "b"); // コンパイルエラー＝実行以前の問題になる
```
## TypeScriptのユースケース

* ソースコードが膨大、複数の人がプロジェクトに関わっている
* ⇒型システムはあらかじめエラーを防ぐ
* C#と文法が似ている

サンプルコード
```js
var Message:string;
class Cat {
  age:number;
  weight:number;
}
var myCat = new Cat();
myCat.age = 3;
myCat.weight = 5.1;
Message = "うちの猫は" + myCat.age + "歳で、体重は" + myCat.weight + "kgです";
alert(Message);
```
