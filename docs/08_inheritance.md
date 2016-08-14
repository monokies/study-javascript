# 継承（オブジェクトの活用）
JavaScriptのオブジェクトはPythonでいうところの辞書形式。  
また、JavaScriptにはクラスという概念が存在がない。  
しかし関数オブジェクトを利用してクラスのように振舞ったり、継承関係を作成することは可能。
（つまり、オブジェクトを再利用性高く使うことができる）   
またnewなど、いろいろな方法でオブジェクトを生成することができるため、複雑である。  

## newについて
JavaScriptでは関数オブジェクトを再利用（初期化）するために`new`演算子を用いる。  
例えば、
```js
//
// 関数オブジェクトの初期化方法（関数のみ）
//

// 慣習的に先頭を大文字にすることがおおい。
var Obj = function() {
  this.name = '名前';
  this.value = '値';
}

// オブジェクトの初期化
//   Pythonでいうところのコンストラクタかな？
var obj = new Obj();
console.log('1: ' + obj.name + ' と ' + obj.value);

// 仮にnewをつけないと...
// var obj2 = Obj();
// console.log('2: ' + obj2.name + ' と ' + obj2.value);
// ちなみに、Obj関数オブジェクトに`return this`をつけると、問題はあるものの、、、動作する
```

これが何が便利かというと、関数内に関数を作ることでクラスに近い挙動を作ることができる。  
例えば、以下のような感じ。  
```js
//
// newの活用方法
//

// 慣習的に先頭を大文字にすることがおおい。
var Obj = function(name) {
  this.name = name;
  this.hoge = function() {
  	console.log(this.name)
  }
}

// 以下のようつ使うことが可能
var obj = new Obj('testtesttest');
obj.hoge();
```

しかし、`new`は曲者で厄介なことを起こす。（参考のリンクを参照。）  
また、newは使わなくても同じようなことが実装できるため、newを使うことは基本的に推奨しない。  
（ひとまず、newは避けた方が良いと考えるようにすればよい。）  
そこでnewを使わずにJavaScriptのオブジェクトを効率よく作る方法を記載する。  

## コードの再利利用方法
「JavaScript: The Good Parts」が推奨しているオブジェクトの作り方で2つ挙げる。

### プロトタイプ継承
プロトタイプを用いた継承を用いると、newを使わずに、同様の実装ができる。

#### そもそもプロトタイプとは？
JavaScriptのプロトタイプ(prototype)はオブジェクトが持つ、親オブジェクトのようなもの。  
`Object.prototype.xxx = yyy`  
のような形式で書くことができる。書いている自分自身、詳細をつかめていないが、挙動としてはオブジェクトと挙動は変わらない。  

以下が実装例。  
```js
// Hogeには空オブジェクトを設定
function Hoge() {}

// Hogeオブジェクトをprototypeを使って拡張する
Hoge.prototype.piyo = function() {
  console.log('ぴよぴよ');
};

// 実際にオブジェクトを利用
var hoge = new Hoge();
hoge.piyo();
```
何が、便利かというと、
* 共通処理を別オブジェクトにしておくことで、処理の共通化を狙うことができる。
  （詳細はリンクの「JavaScriptのプロトタイプからオブジェクト指向を学ぶ」を参考

#### プロトタイプ継承を利用したオブジェクトの活用例
以下のようなコードで活用可能。

```js
// newの代わりとなるようなcreateメソッドを作成する
// 内容としては、新しいオブジェクトを追加する処理をしている。
Object.create = function (o) {
    var F = function () {};
    // oを継承したオブジェクトを生成する処理
    F.prototype = o;
    return new F();
}

// オブジェクトを定義
var myObj = {
    name: 'Hello',
    echo: function() {
    	return this.name + ' World!';
        // console.log(this.name + ' World!');
    }
}

// オブジェクトを作成（インスタンスを作る）
var myInst = Object.create(myObj);
myInst.echo();

// またメソッドの上書きも可能
myInst.echo = function() {
   	return this.name + ' Earth!'
};
myInst.echo();
```

### 関数型継承
関数オブジェクト内でオブジェクトを利用することによって、初期化を行うように処理する。  
例は以下、

```js
// 元となるオブジェクト（クラスのようなもの）
var doc = function (name) {
	// オブジェクトないでオブジェクトを作る場合、
	// thatを使うのが慣習らしい
	var that = {};
	that.get_name = function () {
		return name;
	};

	that.bark = function () {
		console.log('ばうばう');
	}
	// オブジェクトを返すようにする。
	return that;
}

// オブジェクトの生成&実行
var myDoc = doc('ぽち');
console.log(myDoc.get_name());
myDoc.bark();
```

また、上記オブジェクトは以下のようにすると、拡張もできる。  

```js
//　拡張オブジェクト
var superDoc = function (name) {
	// オブジェクトを規定のオブジェクトを利用する
    // 継承のようなものと思ってもらえればと。
	var that = doc(name);

	// メソッドの拡張
	that.get_name = function () {
		return 'Super' + name + '!!!!';
	}

	// メソッドの追加
	that.cry = function () {
		console.log('くぅ〜ん');
	}
	return that
}

// オブジェクトの生成と実行
sDoc = superDoc('タマ');
console.log(sDoc.get_name());
sDoc.bark();
sDoc.cry();
```

## 備考
JavaScriptは様々な方法で、オブジェクトを扱えるため、いろいろ試してみてください。

## 参考
* [JavaScriptのnewって本当にいらない子？](http://taiju.hatenablog.com/entry/20090706/1246840565)
* [JavaScriptのプロトタイプからオブジェクト指向を学ぶ](http://qiita.com/takeharu/items/809114f943208aaf55b3)
* (おまけ)[JavaScriptのクラス？コンストラクタ？？](http://qiita.com/takeharu/items/010752b1427773558f7c)
