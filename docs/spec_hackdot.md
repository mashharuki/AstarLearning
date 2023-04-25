# HackaDot Summer 2023 に向けたMVPの設定と開発案

## Astar Learningのコアバリュー

WASMに対応したDAppは、EVMに比べるとまだまだ少ない。
アーリーアダプターとして一個しっかりしたDAppを作ること自体に価値があると考える。

教育系という分野で攻めて、管理者が不在でもこの界隈のエンジニア・非エンジニアが積極的に知識をシェアし合い、学び合う仕組みを作ることが大きな価値。

将来的にDapp Stakingと絡ませることができればリワードの財源も確保できるので半永久的に稼働する学習コンテンツアプリが出来上がる。(Dapp Stakingと絡ませればAstar Networkならではの価値とも合わせることができる。)

## 今回のハッカソンで目指す MVP

- システム概要図

![](./imgs/Hackdot.drawio.png)

- システムイメージ図

[Figma](https://www.figma.com/file/OwN0rRoVFEKXISc1TyjCcH/Astat-Learning-V2
)

- 開発する画面


※ コンテンツ作成画面は含めるとボリュームが一気に増える・・。
  間に合わない可能性があるため今回は見送り。

- 開発する機能



- 新規で開発する `コンテンツコントラクト` で実装しなければならない変数・関数



※ 将来的なコンテンツ作成画面の開発を見据えて、コンテンツ情報はコントラクト上で管理できるようにしておく。(今回は、コントラクトからgetするだけにとどめる。)

## 使用予定の技術スタック

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

## 全体のディレクトリ構成

`monorepo`構成にしています。

```bash
.
├── LICENSE       ライセンスファイル
├── README.md     プロジェクトのREADMEファイル
├── docs          設計書などの資材を格納するファイル
├── .github       GtiHub Actions用のCIファイルを格納するためのファイル  
├── node_modules  
├── package.json  
├── packages      フロントエンドとスマートコントラクトの資材を格納するためのディレクトリ
└── yarn.lock     
```

## フロントエンドのディレクトリ構造

`packages`ディレクトリの`frontend`ディレクトリ配下にあるソースコードがフロントエンド用のソースになります。

```bash
├── README.md           フロントエンド用のREADMEファイル
├── components            
│   ├── IndexCanvas     Home画面で利用するコンポーネントを格納するディレクトリ
│   ├── LearnCanvas     学習コンテンツ画面で利用するコンポーネントを格納するディレクトリ
│   ├── NftCanvas       NFT表示画面で利用するコンポーネントを格納するディレクトリ
│   └── common          ボタンやローディングなど共通で使うコンポーネントを格納するディレクトリ
├── context 
│   └── index.tsx       全画面共通で利用する変数および機能を実装したファイル NFTの実装や残高の取得のメソッドはここで定義する。
├── metadata            スマートコントラクトのABIファイルを格納するディレクトリ
│   └── nft.json        NFTコントラクトのABIファイル
├── next-env.d.ts       Next.jsの設定ファイル
├── next.config.js      Next.jsの設定ファイル
├── node_modules        
├── out                 ビルドした成果物を格納するディレクトリ
├── package.json        
├── pages               ページ用のコンポーネントを格納するディレクトリ
│   ├── _app.tsx        ベースとなるAppコンポーネント
│   ├── _document.tsx 
│   ├── _error.tsx      エラーページ用コンポーネント
│   ├── index.tsx       Home画面用のコンポーネントファイル
│   ├── learn           学習コンテンツ表示画面用のコンポーネントファイル
│   └── nfts            NFT表示画面用のコンポーネントファイル
├── postcss.config.js   post CSS用の設定ファイル
├── public              画像ファイルなどを格納
├── styles              スタイルシートを格納するためのファイル   
├── tailwind.config.js  Tailwind CSS用の設定ファイル
└── tsconfig.json       
```

## バックエンド(スマートコントラクト)のディレクトリ構造

`packages`ディレクトリの`backend`ディレクトリ配下にあるソースコードがスマートコントラクト用のソースになります。

```bash
.
├── README.md           スマートコントラクト用のREADMEファイル
├── artifacts           コンパイルの成果物
├── config.json         設定ファイル
├── contracts           
    ├── content         コンテンツコントラクト関連のファイルを格納するディレトリ
    └── nft             NFTコントラクト関連のファイルを格納するディレクトリ
├── nft_metadata        NFTで使用するメタデータを格納数ディレクトリ
├── node_modules        
├── package.json        
├── patches             
├── swanky.config.json  Swanky用の設定ファイル
├── test                テストファイルを格納するディレクトリ
└── tsconfig.json       
```