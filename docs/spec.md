# V2の概要設計書

## 今後開発していきたい理想系のシステム概念図

![](./imgs/%E7%90%86%E6%83%B3.drawio.png)

## 今後開発する予定のコントラクトの設計案

![](./imgs/%E3%82%B3%E3%83%B3%E3%83%88%E3%83%A9%E3%82%AF%E3%83%88%E3%81%AE%E8%A8%AD%E8%A8%88%E6%A1%88.drawio.png)

## 採用するTechStack

| No. | 名称        | 概要                                       |
| --- | ----------- | ------------------------------------------ |
| 1   | !ink        | スマートコントラクト開発言語               |
| 2   | Next.js     | フロントエンド開発フレームワーク           |
| 3   | swanky      | スマートコントラクト開発フレームワーク     |
| 4   | TypeScript  | フロントエンド開発言語                     |
| 5   | NFTStorage  | NFT 用のメタデータ保管ストレージ           |
| 6   | Tailwind CSS  | フロントエンド用の CSS フレームワーク      |
| 7   | Contract-UI | スマートコントラクトのデプロイ・検証のため |
| 8   | MonoRepo | 開発効率の向上 |

## Challenges I ran into

!inkを使ったWASMコントラクトの開発だけでなく、Next.js+polkadot.jsを利用したフロントエンド側のプログラムも開発し、それらを接続させてEVM対応のコントラクトを使った時と遜色ないdappを開発することにチャレンジしました。

## How we built it

2月10~11日にかけて行われたWASM MeetupにてWASMコントラクトの開発の基礎を学んだのち、PSP34規格のNFTコントラクトを
OpenBursh+!inkで開発を行いました。  

フロントエンドについては、同じくハンズオンで提供していただいたベースのソースコードを改修し、今後のWASM Dappの開発にも移植できるようなテンプレートになるソース構造としました。  

開発に使用した言語やフレームワークは下記に記載しています。

## 学んだこと

`!ink`と`openbrush` 、`contracts-ui`を利用したWASMコントラクトの開発ノウハウを学びました。  
また、課題であったフロントエンドとの接続については学んだことが多く、Next.js及びPolkadot.jsを使ってWASMコントラクトと接続する実装パターンを学びました。特にPSP34コントラクトで実装されている機能の呼び出しは通常の関数の呼び出しとは異なっていたのでかなりハマって苦労いたしました。しかし、そのおかげで継承元の機能を利用できるdapp開発の手法を学ぶことができました。

まだ簡単なコントラクトしか実装できませんが、このハッカソンを土台にEVM対応のコントラクトで実装した複雑な処理をWASMコントラクトでも実装したり、XCMの機能を利用したdappを作れるようにしていきたいと考えています。

## 挑戦したこと・難しかったこと

フロントとスマートコントラクトとの繋ぎこみにとても苦労しました。EVMのスマートコントラクトであればなんてことない処理でも`polkadot.js`を使って実装しようとすると簡単な処理でもつまづいたので、テクニカルアンバサダーの高橋さんに質問したりして解決しました。苦労しましたが今後のWASM Dapp開発用のテンプレともなるプロダクトを作ることができたと考えています。

## ハッカソン案

1. 学習コンテンツをクリア見るとNFTが発行される。 済
2. 発行したNFTは確認することができる。 済
3. 管理者は、学習コンテンツの作成と発行ができる。 ここはまだ開発が必要
4. 学習コンテンツの内容を格納するコントラクト 開発が必要
5. NFTコントラクトはコンテンツごとに1つ 済

## 開発した画面

1. コンテンツ一覧画面
2. ラーニング画面
3. ConnectWallet画面
4. NFT確認画面

## ✨開発が必要な画面✨

1. コンテンツ作成画面
2. クイズ回答画面

## 開発した機能

1. ConnectWallet機能
2. 学習コンテンツ表示機能
3. 学習コンテンツ一覧表示機能
4. NFT一覧表示機能
5. NFT発行機能

## ✨開発が必要な機能✨

1. コンテンツ作成機能
2. コンテンツ管理機能
3. 投げ銭機能
4. いいね機能
5. クイズ機能

## 今後検証が必要な技術

1. Arweave (コンテンツのMarkdownデータを保存するため)
2. XVM
3. dappStaking機能との連携

### 今後の課題

1. コンテンツを画面から追加できる機能を実装すること
2. コンテンツを作成した貢献者に報酬を支払えるようにすること
3. NFTをSBTに昇華させること
4. dapp stakingに応募すること
5. 良いコンテンツを判定するための評価アルゴリズムの考案
6. dappStakingの報酬をコンテンツコントラクトに送金し、そこからコンテンツ作成者に分配するロジック

### ハッカソンでいただいた指摘

1. UNCHAINとの差異は？ ⇨ Substrate対応
2. クイズ形式はどうか？ ⇨ 今後対応したい。
3. コンテンツ情報をコントラクト(NFT形式)で管理できると良いのではないか？ ⇨ そうしていきたい。

### Polkadot.jsを使って送金する場合の参考スクリプト

```ts
/**
     * sendTip function
     */
    const sendTip = async () => {
        const { web3FromSource } = await import('@polkadot/extension-dapp');

        const wsProvider = new WsProvider(blockchainUrl);
        const api = await ApiPromise.create({
            provider: wsProvider
        });

        var injector:any;

        if (accounts.length == 1) {
            injector = await web3FromSource(accounts[0].meta.source);
        } else if (accounts.length > 1) {
            injector = await web3FromSource(accounts[0].meta.source);
        } else {
            return;
        }

        console.log(`api: ${api}`);
        setIsLoading(true);

        // creator address (Now it is temporarily placed.)
        const toAddress = '5DwLfNQqkLpDoKkHqZCC4EMcFjkn2sbEzqF3JVCZHx6zHoqq'; 
        // 0.001 ASTAR = 1,000,000,000 unit
        const transfer = api.tx.balances.transfer(toAddress, 1000000000);
        const { nonce }:any = await api.query.system.account(injector.signer);
        const tx:any = transfer.sign(injector.signer, {
            nonce,
            blockHash: '',
            genesisHash: '',
            runtimeVersion: undefined
        });
      
        await tx.send(({ events = [], status }:any) => {
          if (status.isInBlock) {
            console.log(`Successful transfer of ${0.001} ASTAR to ${toAddress}`);
            console.log(`Transaction included at blockHash ${status.asInBlock.toString()}`);
            console.log(`Events:`);
            events.forEach(({ phase, event: { data, method, section } }:any) => {
              console.log(`\t${phase.toString()} : ${section}.${method} ${data.toString()}`);
            });
            alert('Send Success')
            setIsLoading(false);
          } else if (status.isFinalized) {
            console.log(`Transaction finalized at blockHash ${status.asFinalized.toString()}`);
            setIsLoading(false);
            alert('Send fail...')
          }
        });
    }
```