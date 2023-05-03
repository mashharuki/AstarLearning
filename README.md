# Astar Learning

WASM 対応の NFT Dapp 開発用のプロダクトです。

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

## 動作確認済み環境情報

|No.|Name|Version|
|---|---|---|
|1|yarn|1.22.19|
|2|Swanky|1.0.7|
|3|Node.js|18.12.1|
|4|cargo-contract |1.5.1|
|5|cargo |1.68.0-nightly|
|6|!ink |~3.4.0|

## 動かし方

- モジュールのインストール

```bash
yarn
```

- フロントエンド

```bash
yarn frontend:start
```

- スマートコントラクトのコンパイル

```bash
yarn compile:all
``` 

## コンセプト・キャッチフレーズ

より多くのエンジニアに、Astar Network と WASM コントラクトを理解・学習するきっかけを提供します！

## Astar Learning Dapp の全体像

[![](./docs/imgs/%E7%8F%BE%E7%8A%B6.drawio.png)]()

## デモ動画

[https://youtu.be/Db8KYhhMUsI](https://youtu.be/Db8KYhhMUsI)

## ピッチ資料

[【Canva】ピッチ資料](https://www.canva.com/design/DAFb1lojVuI/Ggy_rJZLHQCysQhNjoe8Mw/edit?utm_content=DAFb1lojVuI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 画面キャプチャ

[こちら](./docs/imgs/README.md)

## What it does

AstarLearning は、気軽に WASM や Astar Network などについて学べる教育系の Web3 プロダクトです。

ただ学習するだけではなく、用意したコンテンツに最後まで目を通して理解した学習者(ユーザー)には、NFT をミントするチャンスが与えられ、WASM 上で動作する NFT コントラクトの機能を使って学習歴の NFT を発行することができます。

ユーザーは、この Dapp に触れる一環で知識を得るだけでなく WASM コントラクトを利用した実装例を体感できるので、Dapp の実装イメージを膨らませることができます。

これにより一人でも多くのエンジニアに WASM Dapp の魅力を伝え、まだまだ少数である WASM コントラクト開発者を増やすきっかけを増やすことを目的としています。

## The problem it solves

この Learing Astar Dapp で解決しようとしている課題は下記 3 点です。

- まだまだ WASM コントラクト開発者が少数であること
- 気軽に WASM や Astar Network について学べるコンテンツが少ないこと
- WASM を利用した Dapp の実装例がまだまだ世に広く知れ渡っておらず、メリットなどが伝わりにくいこと

## TechStack

| No. | 名称        | 概要                                       |
| --- | ----------- | ------------------------------------------ |
| 1   | !ink        | スマートコントラクト開発言語               |
| 2   | Next.js     | フロントエンド開発フレームワーク           |
| 3   | swanky      | スマートコントラクト開発フレームワーク     |
| 4   | TypeScript  | フロントエンド開発言語                     |
| 5   | NFTStorage  | NFT 用のメタデータ保管ストレージ           |
| 6   | Tailwind    | フロントエンド用の CSS フレームワーク      |
| 7   | Contract-UI | スマートコントラクトのデプロイ・検証のため |

## デプロイしたブロックチェーン

1. Shibuya Network
2. Shiden Network

## デプロイしたコントラクト

| No. | コントラクト名                                  | Contract UI                                                                                                                                   | ネットワーク |
| --- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY | [Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY](https://contracts-ui.substrate.io/contract/Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY) | Shibuya      |
| 2   | ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3 | [XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH](https://contracts-ui.substrate.io/contract/XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH) | Shibuya      |
| 3   | WASM NFT                                        | [ZjCB8QVKytLmGRGXVCHCuUMnMiQTWU2V3696zqnQiD9kjMg](https://contracts-ui.substrate.io/contract/ZjCB8QVKytLmGRGXVCHCuUMnMiQTWU2V3696zqnQiD9kjMg) | Shibuya      |
| 4   | Astar NFT                                       | [a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d](https://contracts-ui.substrate.io/contract/a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d) | Shibuya      |
| 5   | Shiden NFT                                      | [bezTq8fCqsG6X49e1KRmeVcatNWNaSHfNM218iHzFKPTxsk](https://contracts-ui.substrate.io/contract/bezTq8fCqsG6X49e1KRmeVcatNWNaSHfNM218iHzFKPTxsk) | Shibuya      |
| 6   | WASM NFT                                        | [YT4pXMbzftUFcjwH1yMtpB9yvgkJMbYboPyRsCYSD7pgqMa](https://contracts-ui.substrate.io/contract/YT4pXMbzftUFcjwH1yMtpB9yvgkJMbYboPyRsCYSD7pgqMa) | Shiden       |
| 7   | Astar NFT                                       | [betwgtAMMVsLG3tZqDhUcQJ1TthvBkwowotAWyCGgcn9cgE](https://contracts-ui.substrate.io/contract/betwgtAMMVsLG3tZqDhUcQJ1TthvBkwowotAWyCGgcn9cgE) | Shiden       |
| 8   | Shiden NFT                                      | [XNvt8RqjUSd8CZy2dvHS9GhhWjDBEtrPaqxC7fDwMCSzBaY](https://contracts-ui.substrate.io/contract/XNvt8RqjUSd8CZy2dvHS9GhhWjDBEtrPaqxC7fDwMCSzBaY) | Shiden       |

### NFT の画像コンテンツの URI 情報

| No. | コンテンツ名 | URI                                                                                                                                                                                         |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | AstarNFT     | [https://bafkreify7jpiz52g5q65jbhogpj4ymskfbb7mhzkenfdlect6i7gcfx3zu.ipfs.nftstorage.link/](https://ipfs.io/ipfs/Qma5kTpy6sBfMvHUE4PyWLFWQ5gMxUXhJK9Lx3hi4o5mNf?filename=AstarNFT.001.jpeg) |
| 2   | ShidenNFT    | [https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/](https://bafkreie6u3nvkt6psgjcltrajt4lurns52wol224ldaz54ke7bvzzhpiay.ipfs.nftstorage.link/)      |
| 3   | WasmNFT      | [https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/](https://bafkreibda43dd7n37wjxnitiq74tlmxjguzs6mbawkki66sxuhfexhd7le.ipfs.nftstorage.link/)      |

### Astar Learning Dapp の理想系 (Version2)

今後は、WASM コントラクトの開発スキルを磨いて Dapp をバージョンさせたいと考えています。

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

### NFT のミントメソッド実装例(スマートコントラクト)

```rs
// call _mint_to function
self._mint_to(Self::env().caller(), Id::U8(self.last_token_id));
// インクリメント
self.last_token_id += 1;
Ok(())
```

### 継承した`PSP34`のコントラクトの機能を呼び出す場合の実装例

```ts
const { result, output } = await contract.query["psp34::balanceOf"](
  address,
  { value: 0, gasLimit: gasLimit, storageDepositLimit },
  address
);
```

## V2 用の Figma

[画面遷移イメージ図](https://www.figma.com/file/OwN0rRoVFEKXISc1TyjCcH/Astat-Learning-V2?node-id=0%3A1&t=s3f9spGXez8BjHUs-1)

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
12. [react-markdown について](https://floclo.net/pages/cl1lo6qju022509mmmagwkkqu)
13. [zenn-editor](https://github.com/zenn-dev/zenn-editor)
14. [stackedit](https://stackedit.io/app#)
15. [【Astar】EVM 上の資産を Native の資産に変換する方法](https://zenn.dev/mashharuki/articles/bc7591310cd2ad)
16. [CBridge](https://cbridge-docs.celer.network/introduction/fungible-token-bridging-models)
17. [【!ink Docs】Using custom types on storage](https://use.ink/datastructures/custom-datastructure)
18. [Micromodal.js](https://micromodal.vercel.app/)
19. [タブやモーダルなど、よく見かけるフロントエンド UI コンポーネントの紹介と実装サンプル集](https://www.hypertextcandy.com/frontend-ui-components-and-coding-samples)
20. [TailwindCSS + Alpine.js でモーダルダイアログを作ろう](https://blog.makotoishida.com/2021/07/tailwindcss-alpinejs.html)
21. [React でいいねボタンを作ろう](https://typescriptbook.jp/tutorials/react-like-button-tutorial)
22. [Arweave](https://www.arweave.org/)
23. [Summer-HackaDOT-2023](https://github.com/HackaDOT-East-Asia/Summer-HackaDOT-2023)
24. [Arweave Book](https://cookbook.arweave.dev/concepts/queryTransactions.html)
25. [Arweave Faucet]()
26. [Arweave Graphql playground](https://arweave.net/graphql)
27. [Arweave Graphql playground2](https://arweave-search.goldsky.com/graphql)
28. [Aweave Sample App](https://arweave.app/add)
29. [Get An Arweave Wallet](https://docs.bundlr.network/tutorials/get-arweave-wallet)
30. [Arweave GraphQL Guide](https://gql-guide.vercel.app/)
31. [HackaDot Summer 2023](https://www.hackadot.xyz/)
32. [PoL](https://pol.techtec.world/)