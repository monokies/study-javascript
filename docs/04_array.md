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
var ope_array = [1, 2, 3, 4, 5];
// lengthプロパティーで長さを取得できる。
console.log(ope_array);

// push

// delete ope_array[1];

// splice

//

```

## 配列の判定方法

## 配列のメソッド
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

## 配列の注意事項
* for in は極力使わない。配列の順番が保障されず取得されたり、不要なプロパティーが取れる場合がある。
