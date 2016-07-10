# 基本文法（第1回）

## 目的
javascriptの基本文法を理解すること

## 背景
プログラミング能力が初歩程度あること

### インデント
Pythonとは異なり、インデントは自由

### 名前
1文字以上のアルファベット、数字、アンダースコアが使える  
以下は予約後なのでNG

### 定義済み値
* true, false ... bool値
* null ... Null値(nullはJavaScriptではオブジェクトである。)
* undefined ... 未定義
* NaN ... Not A Numberで数値ではないことを示す
* Infinity ... 無限大を表す数値

### 命令文

#### 基本的な書き方
```js
/* 変数名の定義 */

// varをつけないとグローバル変数となるのでよほどの理由がない限り
// varをつけるようにすること!
var hoge = 'hoge';

```

#### if
```js
/* Pythonでいうところのelifはない。elseとifで区別するように。
   基本的な考え方はPythonと同様 */

var num = 100;
if (num > 400) {
    console.log('A');
} else if (num < 500) {
    console.log('B');
} else {
    console.log('C');
}
```

#### switch
```js
/* switch文に条件を書き、caseで分岐させることで条件を書くことができる。
   Pythonには同等の機能はない。がswitch文自体GOTO文を参照にした機能であるため、
   基本的な使用は推奨しない。

   注意: break文を書き忘れると処理が継続される。*/

// break文をコメントアウトして試してみるとよい
for (var num = 1; num < 10; num++) {
    console.log('*** No: '+num+' ***');
    switch (num % 3) {
        case 1:
            console.log('あまり1');
            break;
        case 2:
            console.log('あまり2');
            break;
        default:ß
            console.log('わりきれたーーーー');
            break;
    }
}
```

#### while
```js
/* 基本的な使い方はpythonと同じ */

var num = 0;
while (num < 10) {
   console.log(num);
   num++;
}
```

#### for
```js
/* Pythonとは使い方が異なる（Pythonがどちらかというと特殊
　　主な書き方は以下2つ */

// 初期化部分を作成する
for (var num = 0; num < 10; num++){
    console.log(num);
}

// for in パターン
var nums = [1, 2, 3, 4, 5];
// 以下のvarはなくても動くが、グローバルとなるので注意！
for (var num in nums) {
    console.log(num);
}

```

#### do
```js
// whileと似ているが後ろから評価される
// なので、以下の場合でもかならず実行される
var num = 1;
do {
    console.log(num);
    num ++;
} while(num < 1);


```

#### try - catch
```js
/* Pythonでいうところのtry -- except文
   基本的な考え方はPythonと同じ、finally文もある */

var num = 1;
try {
    console.log(num);
    // 文字列にのみ有効な関数
    num.concat('hoge');
} catch (e) {
    console.log(e);
    console.log('ERROR!');
// finallyは最終的に必ず呼ばれる
} finally {
    console.log('FINISH!');
}

```

#### throw
```js
/* throwを使えばエラーを投げることが可能
   Pythonでいうところのraiseの役割である。 */
try {
    console.log('Start');
    throw 'Throw Error to catch';
} catch(e) {
    console.log('Catch Error! Message is ' + e);
}

```

#### return
return文の考え方はPythonと同様である。  
returnに何も指定されない場合、undefinedとなる。


#### delete
オブジェクトの削除を行う。  
現行は深く覚えておく必要はない。
```js
var obj = {};
obj.x = new Object();
console.log(obj.x);
delete obj.x;
console.log(obj.x);
```

##### その他
* with文があるが、使用するのはお勧めしない（Pythonのwithはもっと使おう）
* switch文はgotoを参考に造られているため利用はお勧めしない

### 演算子
* \*, /, %, +, - ... いつもの
* \>=, <=, >, < ... 不等号
* ==, !=, ===, !== ... 等号
  * 基本的には3つ（===, !==）使うことが望ましい。
```js
// == ではtrueと判断されるパターン
console.log('' == 0);
console.log('0' == 0);
console.log(false == '0');
console.log(null == undefined);
console.log(' \t\r\n ' == 0);
```
* &&, || ... 論理積（pythonでいう`and`, `or`）
* ?: ... 三項演算子
``` js
var num = 1;
// 戻り値(var ans =), 条件式(num > 0), 正の場合('Yes'), 負の場合('No')
var ans = num > 0 ? 'Yes' : 'No';
console.log()
```
