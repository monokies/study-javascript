# 配列

## 配列とは
* 複数のデータに対して連続したメモリを与えることで高速にアクセスを可能にしている
* Pythonのリストと基本的な考え方は同様
* JavaScriptの配列はオブジェクトであり、配列リテラル（`[]`）を用いて配列オブジェクトを作れる

## 配列の操作
### 配列の作成
```js
/* 基本中の基本なので簡単に */
var empty_list = [];
// 値がない場合は、undefinedで返される。
console.log(empty_list[1]);

// 配列には好きな型を入れることができる
var misc_list = [1, 'hoge', null, NaN, ['hoge'], true];
```

### 配列の操作
配列はArray.prototypeを継承しているため、便利なメソッド・プロパティを持っている。
```js
var mono_array = [1, 2, 3, 4, 5];
// lengthプロパティーで長さを取得できる。
console.log(mono_array.length);

// push
//   要素の追加が可能（pythonでいうところの`list`.append()
mono_array.push(6);
console.log(mono_array);

// deleteを使うと削除が可能（pythonでいうところのpop?）
delete mono_array[2]; // 3番目の要素を削除
console.log(mono_array);

// splice
//   spliceで値の入れ替えが可能
//   splice(`削除する場所`, `削除する個数`, `挿入するデータ`)
//   第二引数は2で一つ削除する??（要調査）
mono_array.splice(2, 3, 999)
console.log(mono_array);

// 配列の表示方法
//   これが一般的かな?
for (var i = 0; i < mono_array.length; i++) {
	console.log(mono_array[i]);
};
```

## 配列の判定方法
以下の方法で判定できる  
```js
// 単純に判定するならconstructorプロパティーでみるとよい
console.log([1, 2, 3].constructor === Array);

// 厳密にするなら以下の関数を作ってあげる必要がある。
//   typeof は変数の属性を返す
var is_array = function (value) {
	return value
        // objectである
	    && typeof value === 'object'
        // lengthプロパティーが数値かどうか
	    && typeof value.length === 'number'
        // spliceメソッドを持っているかどうか
	    && typeof value.splice === 'function'
        // lengthプロパティーが列挙可能か（for in で回せるか）
	    && !(value.propertyIsEnumerable('lenght'));
};

console.log(is_array([1,2,3]));
console.log(is_array('hogehoge'));
```

## 多次元
多次元もリストのネスト型で表すことが可能  
```js
var multi_array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]
console.log(multi_array[2][1]);
```

## 配列のメソッド
`これ宿題にしようかな？`
* concat
* join
* pop
* reverse
* shift
* slice
* sort
  * sortは使い方に注意する必要がある
* splice
* unshift

## 配列のメソッド拡張
そのうち...

## 配列の注意事項
* for in は極力使わない。配列の順番が保障されず取得されたり、不要なプロパティーが取れる場合がある。
  * for (i = 0; i < 10; i++){}で使うようにすること
