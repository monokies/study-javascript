MVVM(Model-View-ViewModel)パターンをサポートするためのJavaScriptフレームワーク

M(Model)
クライアントサイドのコードの内、HTMLの都合が関係ない部分（ドメイン）のロジックを実装するJavaScriptコード。
Webサービスの呼び出しや、共通して使われる汎用的なコード（ライブラリ）など。
V(View)
クライアントサイドのコードの内、UIのテンプレートを定義するHTML/CSS。
VM(ViewModel)
クライアントサイドのコードの内、UIの状態保持、および、UIから呼び出されるメソッドを定義したJavaScriptコード

Knockout.jsではデータバインドを用いて、宣言的にView（HTML）とViewModel(JavaScript)を関連付ける。
Viewを変更すればViewModelが、ViewModelを変更すればViewがというように、
一方の変更がもう一方に自動的に反映される。
取得したJSONデータの内容に応じて頻繁にDOMの書き換えをおこなうようなWEBアプリケーションに適している。


DOM操作のためのJavaScriptコードがほとんどないため↓のようなメリットがある。

●マークアップの変更に強い
●UIへの入出力のためにHTML要素へのid設定が不要
●DOM構造を意識せずにModelを作成できる

※データバインドの記述方法はやや複雑…




例）ボタンをクリックするとリスト（<ul>要素）の中身が増えていく機能


HTML
<ul data-bind="foreach: items">
  <li data-bind="text: $data"></li>
</ul>
<button data-bind="click: addItem">要素を追加</button>




Knockout.js
var viewModel = {
        //リストの中身に相当するデータ配列
        items: ko.observableArray([]),
 
        //HTML側から呼び出されるメソッド
        addItem: function () {
            this.items.push('fuga');
        }
    };
 
//状態保持オブジェクトとHTMLテンプレートを紐づけする
ko.applyBindings(viewModel);
