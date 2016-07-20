http://www.slideshare.net/otoyo0122/backbonejs-16753352

Backbone.jsとは・・・？

- クライアントサイド MV*フレームワーク

- 大規模開発で効果あり

- オブザーバーパターン

オブザーバーパターン・・？

- 「オブジェクトの状態を観察するようなプログラムで使われるデザインパターンの一種」
- JavaScriptはイベントを観察するイベント駆動プログラムが得意⇒クリックしたら～何かする
- Backbone.jsではオブジェクトの状態変化もイベントとして監視する

MVC

- Viewがユーザー、Model、Collectionのイベント監視
- Model、Collectionは非同期通信(Ajax)でWEBAPIとやりとり

- データを取得すると状態変化してイベント発生

サンプルコード
http://qiita.com/opengl-8080/items/36e9b380c64ba7766511
