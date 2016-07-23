# 関数（基礎編）

## 関数とは
JavaScriptにおける関数は、Pythonの関数と基本的に考え方は同じ。  
また、JavaScriptの関数はオブジェクトである。（もちろんPythonも）   

JavaScriptでは関数をFunctionオブジェクトという。  
これははFunction.prototypeにリンクされている。さらにObject.prototypeにリンクされている。（この辺は聞き流し程度でOK）

関数が他のオブジェクトと異なるのは、それ自体を呼び出すことができること。  
本来のオブジェクト（Pythonでいうところの辞書）は格納された値を取得することしかできない。

## 関数の作り方
基本的な関数の作り方は以下。
```js
// 関数の作り方
//   基本的な構成
//     function `name` (`argment`) { `process` }
//   nameは省略可能。省略した場合、「無名関数」と呼ばれる。

// 1. 直接作る
function hoge () {
	console.log('1');
}
hoge();

// 2. 変数に格納する
var foo = function () {
	console.log('2');
}
foo();
```

### thisについて
JavaScripの関数でthisを使うことができる。  
Pythonでいうところのselfに近い感覚だが、使い方によって挙動が異なるので注意。  
（今回は一通りしか説明しないが、慣れてくれば、参照のリンク内容をよむと良い。

#### メソッド呼び出し
メソッド内でthisを利用することによって、オブジェクト内の変数にアクセス可能。
```js
// thisを使うことで、オブジェクト内の変数にアクセス可能
var test_obj = {
	value: 10,
	add: function (a) {
		return this.value + a;
	}
}
console.log(test_obj.add(1));
```
*!注意!*  
var hoge = function ~~~  
みたいな形の中でthisを定義して使うとthisはグローバルと扱われるので危険！

### 引数
argumentsをという変数名を利用すると、定義した引数よりも多くの引数にアクセスできる。
```js
// 関数の定義
var hoge = function (a) {
	console.log(a);
	console.log(arguments);
}

// 引数1つ
hoge(1);
console.log('-------');

// 引数複数
hoge(1, 2, 'string', 'hoge' );
```

### 戻り値
pythonのreturnとは大きな違いはない。  
戻り値が指定されていない場合、`undefined`が返る仕組みとなっている。

### 例外
もちろん例外を投げる処理を作ることができる。
```js
// 例外を投げる関数
var chk_num = function (a) {
	if (typeof a !== 'number') {
		throw {
			name: 'TypeError',
			message: 'Not number!!'
		};
	}
	console.log('This is number!!');
}

var try_test = function (a) {
	try{
		chk_num(a);
	} catch (e) {
		console.log(e.name + ": " + e.message);
	}
}

// 成功パターン
console.log('------ Success Pattern -----')
try_test(1);

// 失敗パターン
console.log('----- Failure Pattern ----->')
try_test('str');
```

## 参考
* [JavaScriptの「this」は「4種類」？？](http://qiita.com/takeharu/items/9935ce476a17d6258e27)
* [JavaScriptのthisの覚え方](http://qiita.com/vvakame/items/74005adacc0e8e2a3cab)
