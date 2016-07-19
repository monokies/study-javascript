# オブジェクト

## JavaScriptにとってオブジェクトとは
JavaScriptのオブジェクトは、
* 数値
* 文字列
* 真偽値
* null, undefined

以外はオブジェクトでである（pythonはちなみに全てオブジェクト）  
配列や、関数も全てオブジェクトに関数プロトタイプ、配列プロトタイプを継承している。  
（らしい）

主に（pythonでいうところの辞書）のことをjavascriptでは`オブジェクト`と呼ぶ。  

## オブジェクトとは
オブジェクトは名前と値で構成されている。  
名前は任意の文字列、値はundefined以外なら全て可能。  
（関数であろうが、配列であるが可能）  

JavaScriptにはクラスの概念はないが、他のオブジェクトを継承することを可能にする、プロトタイプ機能がある。  
これを利用すると、オブジェクトの初期化のコストとメモリ消費量を抑えることが可能。  

## オブジェクトの操作

### 生成
生成にはオブジェクトリテラル（`{}`）を使うことで簡単に作成可能。
```js
var mono_obj_init = {};

var mono_obj = {
    'mono': 'monomono'
};

console.log(mono_obj);
```

### 取得
主に2つの方法で取得可能。
```js
// 以下2つの方法で参照可能
console.log(mono_obj.mono);
console.log(mono_obj["mono"]);

// ない値を取得するとundifinedとなる
console.log(mono_obj.hoge);
```

### 更新・追加
取得の2つの方法を利用して更新も可能。
```js
// パターン1
mono_obj.mono = 'piyopiyo';
console.log(mono_obj.mono);

// パターン2
mono_obj["mono"] = 'foofoo';
console.log(mono_obj["mono"]);

// プロパティが存在しない場合、追加される
mono_obj.drink = 'water';
console.log(mono_obj);
```

## オブジェクトの挙動
### 参照渡し
オブジェクトは参照渡しされる。
```js
var name_obj = {};
name_obj.first = 'taro';
var dummy_obj = name_obj;
console.log(name_obj);
console.log(dummy_obj);

// name_objの値を変えたとしても参照渡しのため、両方書きかわる。
name_obj.first = 'jiro';
console.log(name_obj);
console.log(dummy_obj);

// 直接値を入れ替えると問題ない
var fake_obj = {};
fake_obj.first = name_obj.first;
name_obj.first = 'saburo';
console.log(name_obj);
console.log(fake_obj);
```

### プロトタイプ
全てのオブジェクトはプロトタイプオブジェクトとリンクしていて、プロパティーをそこから継承している。  
詳細は関数、継承の部分で記載（予定）

詳細は、本人も勉強中...

例は以下
```js
// 関数にオブジェクトがついている関数を生成する関数
Object.createTestFunc = function (o) {
    var F = function () {};
    // oを継承したオブジェクトを生成する処理
    F.prototype = o;
    return new F();
}

Object.createTestFunc = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
};

var test_obj = {
	"hoge": "hogehoge",
	"foo": "foofoo"
}
var proto_obj = Object.createTestFunc(test_obj);

// protoで変更しても親は問題ない.
proto_obj.hoge = 'hhhhhhh';
console.log("----");
console.log(test_obj.hoge);
console.log(proto_obj.hoge);

// 親で変更しても問題ない
test_obj.hoge = 'ddddddd';
console.log("----");
console.log(test_obj.hoge);
console.log(proto_obj.hoge);

// プロトで値を追加しても親には影響ない
proto_obj.poyo = 'poyopoyo';
console.log("----");
console.log(test_obj.poyo);  // undifinedとなる
console.log(proto_obj.poyo);

// 親で追加し、継承先で存在しない場合、親にあるかどうか探す
test_obj.piyo = 'piyopiyo';
console.log("----");
console.log(test_obj.piyo);
console.log(proto_obj.piyo);
```

### リフレクション
オブジェクトの中身の方法を調べる方法としては、以下の方法を使うとよい。
* typeof ... プロパティーの変数型を調べる。
* hasOwnProperty ... プロパティを持っているか調べる
```js
var check_obj = {
	'num': 1,
	'str': 'hoge'
};

// 型を調査する。
console.log(typeof check_obj);
console.log(typeof check_obj.num);
console.log(typeof check_obj.str);

// プロパティーを持っているかどうかを調べる。
console.log(check_obj.hasOwnProperty('num'));
console.log(check_obj.hasOwnProperty('hoge'));
```

### プロパティーの列挙方法
以下のコードで列挙が可能である。  
for in とforの両方で可能だが、取得される順番が保障されないので、順番を保障する必要がある場合は、forを使う必要がある。
```js
var test_obj = {
	'num': 1,
	'str': 'hoge'
};

// 1. for inを使う方法
for (var o in test_obj) {
	if (typeof test_obj[o] !== 'function'){
		console.log(o + ': ' + test_obj[o]);
	}
}

// 2. forを使う方法
for (var i = 0; i < test_properties.length; i++){
	if (typeof test_obj[test_properties[i]] !== 'function'){
		console.log(test_properties[i] + ': ' + test_obj[test_properties[i]]);
	}
}

```

### プロパティーの削除方法
deleteを使うとプロパティーを削除することが可能。  
```js
var test_obj = {
	'num': 1,
	'str': 'hoge'
};
delete test_obj.num;
console.log(test_obj);
```

## オブジェクトを使うときの工夫
JavaScriptで、グローバル変数を簡単に定義できるというデメリットがある。
（グローバル領域を汚染することは、潜在的なバグを埋め込む可能性がある）     
オブジェクトを使うと、この問題を解決することができる。

以下が例、
```js
// 大文字である必要はない
var MAIN_MAP = {};

MAIN_MAP.name = {
	"first": "taro",
	"last": "yamada"
};

// 各プロパティーに関数を含め、グローバルから読めないようにすることで、
// グローバル領域の汚染を最小限にできる７
MAIN_MAP.friend = {
	"first": "hanako",
	"last": "suzuki",
	hello: function() {
        // この中なら、varを付け忘れていても、グローバルには影響しない
        // hoge = "hello";
		return "Hello Everyone!!"
	}
};

console.log(MAIN_MAP.friend.hello());
```
