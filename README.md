# Astar Learning Dapp
WASM対応のNFT Dapp開発用のプロダクトです。

[![Built with ink!](https://raw.githubusercontent.com/paritytech/ink/master/.images/badge.svg)](https://github.com/paritytech/ink)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
[![](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
[![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
[![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
[![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
[![](https://img.shields.io/badge/Apple-MacBook_Pro_2022-999999?style=for-the-badge&logo=apple&logoColor=white)](https://img.shields.io/badge/Apple-MacBook_Pro_2022-999999?style=for-the-badge&logo=apple&logoColor=white)
[![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
[![](https://img.shields.io/badge/polkadot-E6007A?style=for-the-badge&logo=polkadot&logoColor=000)](https://img.shields.io/badge/polkadot-E6007A?style=for-the-badge&logo=polkadot&logoColor=000)
[![](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
[![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

## コンセプト・キャッチフレーズ

より多くのエンジニアに、Astar NetworkとWASMコントラクトを理解・学習するきっかけを提供します！

## Astar Learning Dappの全体像

[![](./docs/imgs/%E7%8F%BE%E7%8A%B6.drawio.png)]()

## デモ動画

[https://youtu.be/Db8KYhhMUsI](https://youtu.be/Db8KYhhMUsI)

## ピッチ資料

[【Canva】ピッチ資料](https://www.canva.com/design/DAFb1lojVuI/Ggy_rJZLHQCysQhNjoe8Mw/edit?utm_content=DAFb1lojVuI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 画面キャプチャ

[こちら](./docs/imgs/README.md)

## What it does

AstarLearning Dappは、気軽にWASMやAstar Networkなどについて学べる教育系のWeb3プロダクトです。  

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

`!ink`と`openbrush` 、`contracts-ui`を利用したWASMコントラクトの開発ノウハウを学びました。  
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
|4|Astar NFT|[a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d](https://contracts-ui.substrate.io/contract/a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d)|Shibuya| 
|5|Shiden NFT|[bezTq8fCqsG6X49e1KRmeVcatNWNaSHfNM218iHzFKPTxsk](https://contracts-ui.substrate.io/contract/bezTq8fCqsG6X49e1KRmeVcatNWNaSHfNM218iHzFKPTxsk)|Shibuya| 
|6|WASM NFT|[YT4pXMbzftUFcjwH1yMtpB9yvgkJMbYboPyRsCYSD7pgqMa](https://contracts-ui.substrate.io/contract/YT4pXMbzftUFcjwH1yMtpB9yvgkJMbYboPyRsCYSD7pgqMa)|Shiden| 
|7|Astar NFT|[betwgtAMMVsLG3tZqDhUcQJ1TthvBkwowotAWyCGgcn9cgE](https://contracts-ui.substrate.io/contract/betwgtAMMVsLG3tZqDhUcQJ1TthvBkwowotAWyCGgcn9cgE)|Shiden| 
|8|Shiden NFT|[XNvt8RqjUSd8CZy2dvHS9GhhWjDBEtrPaqxC7fDwMCSzBaY](https://contracts-ui.substrate.io/contract/XNvt8RqjUSd8CZy2dvHS9GhhWjDBEtrPaqxC7fDwMCSzBaY)|Shiden| 


### NFT の画像コンテンツのURI情報

|No.|コンテンツ名|URI|
|---|---|---|
|1|AstarNFT|[https://bafkreify7jpiz52g5q65jbhogpj4ymskfbb7mhzkenfdlect6i7gcfx3zu.ipfs.nftstorage.link/](https://ipfs.io/ipfs/Qma5kTpy6sBfMvHUE4PyWLFWQ5gMxUXhJK9Lx3hi4o5mNf?filename=AstarNFT.001.jpeg)|
|2|ShidenNFT|[https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/](https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/)|
|3|WasmNFT|[https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/](https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/)|

## ハッカソン案

1. 学習コンテンツをクリア見るとNFTが発行される。
2. 発行したNFTは確認することができる。
3. 管理者は、学習コンテンツの作成と発行ができる。
4. 学習コンテンツの内容を格納するコントラクト
5. NFTコントラクトはコンテンツごとに1つ

## 開発した画面

1. コンテンツ一覧画面
2. ラーニング画面
3. ConnectWallet画面
4. NFT確認画面

## 開発した機能

1. ConnectWallet機能
2. 学習コンテンツ表示機能
3. 学習コンテンツ一覧表示機能
4. NFT一覧表示機能
5. NFT発行機能

### 今後の課題

1. コンテンツを画面から追加できる機能を実装すること
2. コンテンツを作成した貢献者に報酬を支払えるようにすること
3. NFTをSBTに昇華させること
4. dapp stakingに応募すること

### ハッカソンでいただいた指摘

1. UNCHAINとの差異は？ ⇨ Substrate対応
2. クイズ形式はどうか？ ⇨ 今後対応したい。
3. コンテンツ情報をコントラクト(NFT形式)で管理できると良いのではないか？ ⇨ そうしていきたい。

### Astar Learning Dappの理想系 (Version2)

今後は、WASMコントラクトの開発スキルを磨いてDappをバージョンさせたいと考えています。

![](./docs/imgs/%E7%90%86%E6%83%B3.drawio.png)

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

### 継承した`PSP34`のコントラクトの機能を呼び出す場合の実装例

```ts
const {result, output} = 
    await contract.query['psp34::balanceOf'](
        address,
        { value: 0, gasLimit: gasLimit,storageDepositLimit },
        address);
```

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
15. [【Astar】EVM上の資産をNativeの資産に変換する方法](https://zenn.dev/mashharuki/articles/bc7591310cd2ad)
16. [CBridge](https://cbridge-docs.celer.network/introduction/fungible-token-bridging-models)
