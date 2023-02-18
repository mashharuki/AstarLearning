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

export const WASM_NFT_CONTRACT_ADDRESS = "WYPiqyhs6iXsDg6VGprs1C5dQfJEY4BdfVTcnCYgWEzLrpj";