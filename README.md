# やまぐちめぐり

## やまぐちをぐるっと回って特産物を制覇するアプリ

url: [https://checkin-app-187398.web.app](https://checkin-app-187398.web.app)

### 利用方法

- 利用者はアプリ上のマップにあるチェックポイントに行って、そこに置かれたQRコードをアプリ上から読み込んでチェックインする
- チェックインしたらマップ下のリストがチェックイン済に更新される
- 🙌すべてのチェックポイントを制覇しよう！！

## プロダクトの背景

### 企画について

今回、あらためて山口県について調べたところ、特産品がめちゃくちゃたくさんあって、しかもキャラクターがいっぱいいることを知りました。

山口の自慢の色んな場所をめぐりながら特産品を知ることができたら楽しいかなと思いました。

構想時間：4h（実装方針の調査も含む）

実装時間：約10ｈ

### 今回チャレンジングだったこと

私はフロントの実装が嫌いです。あとJavaScriptは苦手です。firebaseは授業で触った程度の知識からアップデートされていません。

今回は思いついた企画もMapものだったので、ReactをつかってJavaScriptオンリーでfirebaseをデータストアとして実装するという苦手づくしで実装しました。

一番大変だったのは自分の好きじゃない、もしくは苦手なものを使い続けるという苦行に耐えるモチベーションを保つことでした。

あとasyncとかReactのドキュメントとかこれまでも何回もググってるのに、何回ググっても覚えられなくてそれも大変苦痛でした。

## ふりかえり

- 肝心のチェックインの登録のところ、firebaseの非同期処理がうまくできずに該当データのIDをハードコーディングしています、すみません🙏
- ビジネス的な観点でいうと、これは全然スケールしないですｗ
- firebaseのデータのもたせ方を相当迷って時間を浪費したのでもう少し準備をしておけばよかったです（なめてました）
- マップの使い方とかも完全に忘却の彼方だったので初日はマップ表示で数時間使ってしまいました
- 自分がテストで設定したマップ中央の緯度経度とピンの緯度経度がずれすぎていてピンがでない…というところで悩んでいた
  - 頭痛と睡魔と戦いながらやるからこういうことになります
  - 緯度経度って1度ずれるとだいぶ遠いということ、しっかり覚えておきたいと思います
- QRの読み込みなど実装の大部分はかんたんなツールが提供されているのでハッカソン向き

![画像](./shimonoseki.png)
