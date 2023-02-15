# WasmNFTDapp
WASM対応のNFT Dapp開発用のプロダクトです。

## デプロイしたコントラクト

|No.|コントラクト名|Contract UI|ネットワーク|
|---|---|---|---|
|1|Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY|[Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY](https://contracts-ui.substrate.io/contract/Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY)|Shibuya| 
|2|ZvVKURvqWEF3hJEZWUYpprx9o1JuXxUVFyEfjHaodFzD9F3|[XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH](https://contracts-ui.substrate.io/contract/XVqUJZtMP5cAyJeFPE6coWtTnAno3KJsWeP2ByhH4Bt3nRH)|Shibuya| 
|3|WASM NFT|[WYPiqyhs6iXsDg6VGprs1C5dQfJEY4BdfVTcnCYgWEzLrpj](https://contracts-ui.substrate.io/contract/WYPiqyhs6iXsDg6VGprs1C5dQfJEY4BdfVTcnCYgWEzLrpj)|Shibuya| 
|4||[](https://contracts-ui.substrate.io/contract/)|Shibuya| 
|5||[](https://contracts-ui.substrate.io/contract/)|Shibuya| 

### 各学習コンテンツ用のURI情報

|No.|コンテンツ名|URI|
|---|---|---|
|1|AstarNFT|[https://ipfs.io/ipfs/Qmenex4NjQqRizcqXccFWCSrdvS48hP3iWXDbkNbRMM6aA?filename=astar.json](https://ipfs.io/ipfs/Qmenex4NjQqRizcqXccFWCSrdvS48hP3iWXDbkNbRMM6aA?filename=astar.json)|
|2|ShidenNFT|[https://ipfs.io/ipfs/QmXbGhkuGD4oAJBCaZ6Rdgpoexcab7YJa7udZ86FtCPQfC?filename=shiden.json](https://ipfs.io/ipfs/QmXbGhkuGD4oAJBCaZ6Rdgpoexcab7YJa7udZ86FtCPQfC?filename=shiden.json)|
|3|WasmNFT|[https://ipfs.io/ipfs/QmVnucwVHirRts5csqdjTnGQ98atfaLzvfZtnXGQ88EpBT?filename=wasm.json](https://ipfs.io/ipfs/QmVnucwVHirRts5csqdjTnGQ98atfaLzvfZtnXGQ88EpBT?filename=wasm.json)|


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
6. [!ink Working with Mapping](https://use.ink/datastructures/mapping/)
7. [With inline price](https://tailwindui.com/components/preview)