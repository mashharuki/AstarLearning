# WasmNFTDapp
WASM対応のNFT Dapp開発用のプロダクトです。

## デプロイしたコントラクト

|No.|コントラクト名|Contract UI|ネットワーク|
|---|---|---|---|
|1|Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY|[Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY](https://contracts-ui.substrate.io/contract/Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY)|Shibuya| 
|2|ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3|[ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3](https://contracts-ui.substrate.io/contract/ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3)|Shibuya| 

## ハッカソン案

1. 学習コンテンツをクリア見るとNFTが発行される。
2. 発行したNFTは確認することができる。
3. 管理者は、学習コンテンツの作成と発行ができる。
4. 学習コンテンツの内容を格納するコントラクト
5. NFTコントラクト

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

### NFTのミントメソッド実装例

```rs
// call _mint_to function
self._mint_to(Self::env().caller(), Id::U8(self.last_token_id));
// インクリメント
self.last_token_id += 1;
Ok(())
```

## 参考文献
1. [https://openbrush.io/](https://openbrush.io/)
2. [psp34_contract](https://github.com/k-c-h-a-n/psp34_contract)
3. [psp34_frontend](https://github.com/k-c-h-a-n/psp34_contract/tree/main/nft-collectible-frontend)
4. [test code](https://use.ink/basics/contract-testing/)
5. [Use the Wizard to generate generic PSP34 code](https://docs.astar.network/docs/builder-guides/from-zero-to-ink-hero/nft/Wizard/)