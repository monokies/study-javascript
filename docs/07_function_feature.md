# 関数（各特徴）

## 関数の特徴
### 変数型の拡張
prototypeを利用すると、関数に関数（メソッド）を追加することができるようになる。  
しかし、詳細についてはここでは話さにようにする。

### 再帰
JavaScriptでももちろん再帰関数を書くことは可能。
```js
function fib(n) {
  return n < 2 ? n : fib(n - 2) + fib(n - 1);
}

fib(10);
```

### スコープ
スコープがあるということは、
* 変数やパラメータの生存期間がきまっていて
* アクセスの範囲が決まっている

```js
var foo = function () {
    var a = 3, b = 5, c = undefined;

    var bar = function () {

    	// [B] a:  3 , b:  undefined , c:  undefined
	    console.log('[B] a: ', a, ', b: ', b, ', c: ', c);
        var b = 7, c = 11;
		a += b + c;

        // [C] a:  21 , b:  7 , c:  11
	    console.log('[C] a: ', a, ', b: ', b, ', c: ', c);
    };

	// [A] a:  3 , b:  5 , c:  undefined
    console.log('[A] a: ', a, ', b: ', b, ', c: ', c);
    bar();

    // [D] a:  21 , b:  5 , c:  undefined
    console.log('[D] a: ', a, ', b: ', b, ', c: ', c);
}
foo();
```
当たり前そうな感じはするが、pythonだと、

```python
def foo():
	a = 3
	b = 5
	c = None

	def bar():
		b = 7
		c = 11

		# [B] b: 7, c: 11（aにはアクセスできない）
		print '[B] b: {0}, c: {1}'.format(b, c)

		a = b + c

		# [C] a: 18, b: 7, c: 11
		print '[C] a: {0}, b: {1}, c: {2}'.format(a, b, c)

	# [A] a: 3, b: 5, c: None
	print '[A] a: {0}, b: {1}, c: {2}'.format(a, b, c)
	bar()

	# [D] a: 3, b: 5, c: None
	print '[D] a: {0}, b: {1}, c: {2}'.format(a, b, c)
foo()
```

となり、スコープはある程度気にする必要がある。（言語問わず）
JavaScriptでは変数名が長く生き続ける可能性があるので注意。

**多くのモダンな言語において、変数名の定義はできる限り遅く、最初にそれを利用する場所でおこなうことがよい**

### クロージャー
クロージャーとはネストされた関数のこと。  
JavaScriptでも以下のように書くことが可能

以下は例。
```js
var outer = function (a) {
	// これがクロージャー
	var inner = function (){
		return a;
	};
	return inner;
}

o = outer('hoge');
console.log(o());
```
#### 何が便利か？
JavaScriptではクロージャーの一つ外側の関数で定義した変数も使うことができるため、  
上記のような、インスタンスもどきを作ることができたり、処理をシンプルに書くことができる。

### コールバック
引数として渡される関数のこと。  
使い方としては、
* 関数の処理の中で関数を利用したい
* 関数処理の後で動作させる関数を渡しておく

など。  
以下は例。（動作はしない）

```js
// 普通に書くパターン
request = prepare_the_request();
response = send_request_synchronously(request);
display(response);

// コールバックを使うパターン
//   send_request_synchronouslyの結果を第二引数の関数で処理する。
request = prepare_the_request();
send_request_synchronously(request, function (response) {
    display(response);
});
```

### メモ化
前回の操作の結果をオブジェクトに記憶しておくことをメモ化という。  
（ざつにいうとメモリキャッシュ？）  
フィボナッチ数を計算する関数のサンプル。  

```js
//メモ化をしない// メモ化をしないパターン
var fibo = function (n) {
	return n < 2 ? n : fibo(n - 1) + fibo (n - 2);
};

// この場合だと453回も関数が呼び出されている
for (var i = 1; i <= 10; i += 1) {
	console.log('// ' + i + ': ' + fibo(i));
}

// メモ化をする
var fibo2 = function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();

// この場合だと29回しか関数が呼び出されていない
for (var i = 1; i <= 10; i += 1) {
	console.log('// ' + i + ': ' + fibo2(i));
}
```


## 参考
**クロージャーに関する資料**
* [クロージャってどんなときに使うの？ ～ 利用場面を ３つ 挙げてみる](http://qiita.com/HirofumiYashima/items/ed17c83f26de3d510b93)
**コールバックに関する資料**
* [JavaScriptコールバックを整理してみた【再入門】](http://qiita.com/nekoneko-wanwan/items/f6979f687246ba089a35)
**（おまけ）JavaScriptでカスケードを実装する**
* [カスケード](http://hysa.hateblo.jp/entry/20090909/method_chain)
**（おまけ2）JavaScriptのカリー化について**
* [JavaScriptのカリー化について味見してみる](http://qiita.com/KENJU/items/a056666fc6961906e4be)
