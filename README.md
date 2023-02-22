# WasmNFTDapp
WASM対応のNFT Dapp開発用のプロダクトです。

[![Built with ink!](https://raw.githubusercontent.com/paritytech/ink/master/.images/badge.svg)](https://github.com/paritytech/ink)

## コンセプト・キャッチフレーズ

より多くのエンジニアに、Astar NetworkとWASMコントラクトを理解・学習するきっかけを提供します！

## What it does

Learing Astar Dappは、気軽にWASMやAstar Networkなどについて学べる教育系のWeb3プロダクトです。  

ただ学習するだけではなく、用意したコンテンツに最後まで目を通して理解した学習者(ユーザー)には、NFTをミントするチャンスが与えられ、WASM上で動作するNFTコントラクトの機能を使って学習歴のNFTを発行することができます。

ユーザーは、このDappに触れる一環で知識を得るだけでなくWASMコントラクトを利用した実装例を体感できるので、Dappの実装イメージを膨らませることができます。  

これにより一人でも多くのエンジニアにWASM Dappの魅力を伝え、まだまだ少数であるWASMコントラクト開発者を増やすきっかけを増やすことを目的としています。

## The problem it solves

この Learing Astar Dappで解決しようとしている課題は下記3点です。

- まだまだWASMコントラクト開発者が少数であること
- 気軽にWASMやAstar Networkについて学べるコンテンツが少ないこと
- WASMを利用したDappの実装例がまだまだ世に広く知れ渡っておらず、メリットなどが伝わりにくいこと

## Challenges I ran into

!inkを使ったWASMコントラクトの開発だけでなく、Next.js+polkadot.jsを利用したフロントエンド側のプログラムも開発し、それらを接続させてEVM対応のコントラクトを使った時と遜色ないdappを開発することにチャレンジしました。

## How we built it

2月10~11日にかけて行われたWASM MeetupにてWASMコントラクトの開発の基礎を学んだのち、PSP34規格のNFTコントラクトを
OpenBursh+!inkで開発を行いました。  

フロントエンドについては、同じくハンズオンで提供していただいたベースのソースコードを改修し、今後のWASM Dappの開発にも移植できるようなテンプレートになるソース構造としました。  

開発に使用した言語やフレームワークは下記に記載しています。

## 採用した技術

|No.|名称|概要|
|----|----|----|
|1|!ink|スマートコントラクト開発言語|
|2|Next.js|フロントエンド開発フレームワーク|
|3|swanky|スマートコントラクト開発フレームワーク|
|4|TypeScript|フロントエンド開発言語|
|5|NFTStorage|NFT用のメタデータ保管ストレージ|
|6|Tailwind|フロントエンド用のCSSフレームワーク|
|7|Contract-UI|スマートコントラクトのデプロイ・検証のため|

## デプロイしたブロックチェーン

1. Shibuya Network
2. Shiden Network

## 学んだこと

!inkとopenbrush、contracts-uiを利用したWASMコントラクトの開発ノウハウを学びました。  
また、課題であったフロントエンドとの接続については学んだことが多く、Next.js及びPolkadot.jsを使ってWASMコントラクトと接続する実装パターンを学びました。特にPSP34コントラクトで実装されている機能の呼び出しは通常の関数の呼び出しとは異なっていたのでかなりハマって苦労いたしました。しかし、そのおかげで継承元の機能を利用できるdapp開発の手法を学ぶことができました。

まだ簡単なコントラクトしか実装できませんが、このハッカソンを土台にEVM対応のコントラクトで実装した複雑な処理をWASMコントラクトでも実装したり、XCMの機能を利用したdappを作れるようにしていきたいと考えています。

## 挑戦したこと・難しかったこと

フロントとスマートコントラクトとの繋ぎこみにとても苦労しました。EVMのスマートコントラクトであればなんてことない処理でも`polkadot.js`を使って実装しようとすると簡単な処理でもつまづいたので、テクニカルアンバサダーの高橋さんに質問したりして解決しました。苦労しましたが今後のWASM Dapp開発用のテンプレともなるプロダクトを作ることができたと考えています。

## デプロイしたコントラクト

|No.|コントラクト名|Contract UI|ネットワーク|
|---|---|---|---|
|1|Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY|[Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY](https://contracts-ui.substrate.io/contract/Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY)|Shibuya| 
|2|ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3|[XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH](https://contracts-ui.substrate.io/contract/XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH)|Shibuya| 
|3|WASM NFT|[ZjCB8QVKytLmGRGXVCHCuUMnMiQTWU2V3696zqnQiD9kjMg](https://contracts-ui.substrate.io/contract/ZjCB8QVKytLmGRGXVCHCuUMnMiQTWU2V3696zqnQiD9kjMg)|Shibuya| 
|4||[](https://contracts-ui.substrate.io/contract/)|Shibuya| 
|5||[](https://contracts-ui.substrate.io/contract/)|Shibuya| 

### 各学習コンテンツ用のURI情報

|No.|コンテンツ名|URI|
|---|---|---|
|1|AstarNFT|[https://bafkreify7jpiz52g5q65jbhogpj4ymskfbb7mhzkenfdlect6i7gcfx3zu.ipfs.nftstorage.link/](https://bafkreify7jpiz52g5q65jbhogpj4ymskfbb7mhzkenfdlect6i7gcfx3zu.ipfs.nftstorage.link/)|
|2|ShidenNFT|[https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/](https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/)|
|3|WasmNFT|[https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/](https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/)|


### NFT の画像コンテンツのURI情報

|No.|コンテンツ名|URI|
|---|---|---|
|1|AstarNFT|[https://ipfs.io/ipfs/Qma5kTpy6sBfMvHUE4PyWLFWQ5gMxUXhJK9Lx3hi4o5mNf?filename=AstarNFT.001.jpeg](https://ipfs.io/ipfs/Qma5kTpy6sBfMvHUE4PyWLFWQ5gMxUXhJK9Lx3hi4o5mNf?filename=AstarNFT.001.jpeg)|
|2|ShidenNFT|[https://ipfs.io/ipfs/QmV4PdFx5n3bXT1ULNZmAZ1dDAoD4BjNqY8JyWpK77imVo?filename=ShidenNFT.001.jpeg](https://ipfs.io/ipfs/QmV4PdFx5n3bXT1ULNZmAZ1dDAoD4BjNqY8JyWpK77imVo?filename=ShidenNFT.001.jpeg)|
|3|WasmNFT|[https://ipfs.io/ipfs/Qme1eqKbLimotyLbQQqTexPsvR3rHSMGvusG4dDUWpz6BV?filename=WasmNFT.001.jpeg](https://ipfs.io/ipfs/Qme1eqKbLimotyLbQQqTexPsvR3rHSMGvusG4dDUWpz6BV?filename=WasmNFT.001.jpeg)|

## ハッカソン案

1. 学習コンテンツをクリア見るとNFTが発行される。
2. 発行したNFTは確認することができる。
3. 管理者は、学習コンテンツの作成と発行ができる。
4. 学習コンテンツの内容を格納するコントラクト
5. NFTコントラクトはコンテンツごとに1つ

## 画面

1. コンテンツ一覧画面
2. コンテンツ本体画面
3. コンテンツ作成画面

## 機能

1. コンテンツ作成画面
2. コンテンツ表示画面
3. コンテンツ一覧表示画面
4. コンテンツ完了後NFT画面


### NFT コントラクトオブジェクトの中身

```json
query
    mintToken
    mintWithAttribute
    psp34::allowance
    psp34::approve
    psp34::balanceOf
    psp34::collectionId
    psp34::ownerOf
    psp34::totalSupply
    psp34::transfer
    psp34Burnable::burn
    psp34Enumerable::ownersTokenByIndex
    psp34Enumerable::tokenByIndex
    psp34Metadata::getAttribute
```

### NFTのミントメソッド実装例(スマートコントラクト)

```rs
// call _mint_to function
self._mint_to(Self::env().caller(), Id::U8(self.last_token_id));
// インクリメント
self.last_token_id += 1;
Ok(())
```

### 今後の課題

1. コンテンツを画面から追加できる機能を実装すること
2. コンテンツを作成した貢献者に報酬を支払えるようにすること
3. NFTをSBTに昇華させること
4. dapp stakingに応募すること

## 参考文献
1. [https://openbrush.io/](https://openbrush.io/)
2. [psp34_contract](https://github.com/k-c-h-a-n/psp34_contract)
3. [psp34_frontend](https://github.com/k-c-h-a-n/psp34_contract/tree/main/nft-collectible-frontend)
4. [test code](https://use.ink/basics/contract-testing/)
5. [Use the Wizard to generate generic PSP34 code](https://docs.astar.network/docs/builder-guides/from-zero-to-ink-hero/nft/Wizard/)
6. [!ink Working with Mapping](https://use.ink/datastructures/mapping/)
7. [With inline price](https://tailwindui.com/components/preview)
8. [Upgradeable Contracts](https://use.ink/basics/upgradeable-contracts)
9. [Sample Upgradeable Contracts](https://github.com/paritytech/ink/tree/master/examples/upgradeable-contracts)
10. [sol2ink](https://github.com/727-Ventures/sol2ink)
11. [how-to-call-openbrush-contract-from-front-end-app](https://stackoverflow.com/questions/74083616/how-to-call-openbrush-contract-from-front-end-app)
12. [react-markdownについて](https://floclo.net/pages/cl1lo6qju022509mmmagwkkqu)
13. [zenn-editor](https://github.com/zenn-dev/zenn-editor)
14. [stackedit](https://stackedit.io/app#)