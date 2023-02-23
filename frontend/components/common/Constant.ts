/**
 * 定数を定義するファイル
 */
export const BLOCKCHAINS = [
    {
      name: 'Shiden', 
      url: 'wss://shiden.api.onfinality.io/public-ws',
      subscan_url: 'https://shiden.subscan.io/account/',
    },
    {
      name: 'Shibuya',
      url: 'wss://rpc.shibuya.astar.network',
      subscan_url: 'https://shibuya.subscan.io/account/',
    },
    {
      name: 'Local',
      url: 'ws://127.0.0.1:9944',
    },
    {
      name: 'Custom',
      url: '',
      //url: 'wss://astar-collator.cielo.works:11443',
    },
];

export const TWITTER_URL = "https://twitter.com/HARUKI05758694";
// 各コントラクトのアドレス
export const WASM_NFT_CONTRACT_ADDRESS = "ZjCB8QVKytLmGRGXVCHCuUMnMiQTWU2V3696zqnQiD9kjMg";
export const ASTAR_NFT_CONTRACT_ADDRESS = "a6WkJRaZcy6cVkvRQmRmd1TVhAc1Dfq3d7cmpGUjjn9736d";
export const SHIDEN_NFT_CONTRACT_ADDRESS = "bezTq8fCqsG6X49e1KRmeVcatNWNaSHfNM218iHzFKPTxsk";