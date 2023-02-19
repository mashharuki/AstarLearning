import { 
    createContext, 
    useContext, 
    useMemo, 
    useState, 
} from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { 
    BLOCKCHAINS,
    WASM_NFT_CONTRACT_ADDRESS,
    ASTAR_NFT_CONTRACT_ADDRESS,
    SHIDEN_NFT_CONTRACT_ADDRESS
} from '../components/common/Constant';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import type { WeightV2 } from '@polkadot/types/interfaces';
// Specify the metadata of the contract.
import wasmNftAbi from '../metadata/wasm_nft.json';

const proofSize = 131072
const refTime = 6219235328
const storageDepositLimit = null

// Create Context Object
const ContractContext = createContext({});

/**
 * useContractContext function
 * @returns 
 */
export function useContractContext() {
    return useContext(ContractContext);
}

/**
 * ContractProvider Compnent
 * @param param0 
 * @returns 
 */
export function ContractProvider({ children }: any) {
    // ステート変数
    const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
    const [actingAddress, setActingAddress] = useState('');
    const [blockchainName, setBlockchainName] = useState('Shibuya');
    const [blockchainUrl, setBlockchainUrl] = useState('');
    const [api, setApi] = useState<any>();
    const [block, setBlock] = useState(0);
    const [ownNfts, setOwnNfts] = useState('');
    const [ownNftsResult, setOwnNftsResult] = useState('');
    const [tokenUri, setTokenUri] = useState('');
    const [tokenUriResult, setTokenUriResult] = useState('');
    const [width, setWidth] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    /**
     * createNftContract function
     * @param contentFlg コンテンツフラグ
     */
    const createNftContract = (contentFlg: string) => {
        var contract;

        if(contentFlg === 'wasm'){
            contract = new ContractPromise(api, wasmNftAbi, WASM_NFT_CONTRACT_ADDRESS);
        } else if(contentFlg === 'astar') {
            contract = new ContractPromise(api, wasmNftAbi, ASTAR_NFT_CONTRACT_ADDRESS);
        } else {
            contract = new ContractPromise(api, wasmNftAbi, SHIDEN_NFT_CONTRACT_ADDRESS);
        }
        return contract;
    };

    /**
     * getNftAddress function
     */
    const getNftAddress = (contentFlg: string) => {
        var address;

        if(contentFlg === 'wasm'){
            address = WASM_NFT_CONTRACT_ADDRESS;
        } else if(contentFlg === 'astar') {
            address = ASTAR_NFT_CONTRACT_ADDRESS;
        } else {
            address = SHIDEN_NFT_CONTRACT_ADDRESS;
        }
        return address;
    };

    /**
     * connectWallet function
     * @returns 
     */
    const connectWallet = async () => {
        const { web3Accounts, web3Enable } = await import("@polkadot/extension-dapp");
        const extensions = await web3Enable("Learning Astar Dapp");

        if (extensions.length === 0) {
            return;
        }
        // get Account info
        const account = await web3Accounts();
        setAccounts(account);

        if (!actingAddress) {
            setActingAddress(account[0].address);
        }

        const newDataset = BLOCKCHAINS.filter(data => data.name === blockchainName);

        let chainUrl = newDataset[0]?.url;
        setBlockchainUrl(chainUrl);

        if (!chainUrl) {
            return;
        }

        setBlock(0);
        // ブロックチェーンにアクセスするためのオブジェクトを作成
        const wsProvider = new WsProvider(chainUrl);
        const api = await ApiPromise.create({
            provider: wsProvider
        });
        // call subscribeNewHeads
        const unsubscribe = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
            setApi(api);
            setBlock(lastHeader.number.toNumber());
            unsubscribe();
        });

        // 現在取得しているNFTを求める。 
        await getOwnNfts(api, 'wasm');
        await getTokenUri(api, 'wasm', 0);
    };

    /**
     * mint function
     * @param contentFlg コンテンツフラグ
     * @returns 
     */
    const mint = async(contentFlg: string) => {

        const { web3FromSource } = await import('@polkadot/extension-dapp');

        if (!blockchainUrl || accounts.length == 0) {
            alert("Please Connect Wallet");
            return;
        }
          
        const gasLimit = 30000 * 1000000;
        // コントラクトインスタンスを格納する変数
        var contract = createNftContract(contentFlg);
       
        console.log("nft contract:", contract);
        setIsLoading(true);

        const mintExtrinsic =
            await contract.tx.mintNft({
                gasLimit: api.registry.createType('WeightV2', {
                    refTime,
                    proofSize,
                }) as WeightV2,
            storageDepositLimit});
      
        let injector: any;

        if (accounts.length == 1) {
            injector = await web3FromSource(accounts[0].meta.source);
        } else if (accounts.length > 1) {
            injector = await web3FromSource(accounts[0].meta.source);
        } else {
            return;
        }
      
        mintExtrinsic.signAndSend(actingAddress, { signer: injector.signer }, ({ status }) => {
            if (status.isInBlock) {
                console.log(`Completed at block hash #${status.asInBlock.toString()}`);
            } else if (status.isFinalized) {
                console.log('finalized');
                alert("Mint Success!!");
                setIsLoading(false);
            } else {
                console.log(`Current status: ${status.type}`);
            }
        }).catch((error: any) => {
            console.log(':( transaction failed', error);
            alert("Mint fail...");
            setIsLoading(false);
        });
    };

    /**
     * getOwnNfts function
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     * @returns own nft's id
     */
    const getOwnNfts = async(api:any, contentFlg: string) => {
        // コントラクトインスタンスとアドレスを格納する変数
        var contract;
        var contractAddress = getNftAddress(contentFlg);

        if(contentFlg === 'wasm'){
            contract = new ContractPromise(api, wasmNftAbi, WASM_NFT_CONTRACT_ADDRESS);
        } else if(contentFlg === 'astar') {
            contract = new ContractPromise(api, wasmNftAbi, ASTAR_NFT_CONTRACT_ADDRESS);
        } else {
            contract = new ContractPromise(api, wasmNftAbi, SHIDEN_NFT_CONTRACT_ADDRESS);
        }

        console.log("nft contract:", contract);

        // call get_own_nft メソッド
        const {result, output} = 
            await contract.query.getOwnNfts(
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },)

        setOwnNftsResult(JSON.stringify(result.toHuman()));

        // The actual result from RPC as `ContractExecResult`
        console.log('getOwnNfts result:', JSON.stringify(result.toHuman()));

        // check if the call was successful
        if (result.isOk) {
            // output the return value
            console.log('Success', output?.toHuman());
            const outputData: any = output;
            setOwnNfts(outputData.toString());
            return outputData.toString();
        } else {
            setOwnNfts('0');
            return '';
        }
    };

    /**
     * getTokenUri function
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     * @param tokenId トークンID
     * @returns own nft's id
     */
    const getTokenUri = async(api:any, contentFlg: string, tokenId: any) => {
        // コントラクトインスタンスとアドレスを格納する変数
        var contract;
        var contractAddress = getNftAddress(contentFlg);

        if(contentFlg === 'wasm'){
            contract = new ContractPromise(api, wasmNftAbi, WASM_NFT_CONTRACT_ADDRESS);
        } else if(contentFlg === 'astar') {
            contract = new ContractPromise(api, wasmNftAbi, ASTAR_NFT_CONTRACT_ADDRESS);
        } else {
            contract = new ContractPromise(api, wasmNftAbi, SHIDEN_NFT_CONTRACT_ADDRESS);
        }

        // call getTokenUri メソッド
        const {result, output} = 
            await contract.query.tokenUri(
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },[
                    tokenId
                ]);

        setTokenUriResult(JSON.stringify(result.toHuman()));

        // The actual result from RPC as `ContractExecResult`
        console.log(result.toHuman());

        // check if the call was successful
        if (result.isOk) {
            // output the return value
            console.log('Success', output?.toHuman());
            const outputData: any = output;
            setTokenUri(outputData.toString());
            return outputData.toString();
        } else {
            setTokenUri('');
            return '';
        }
    };

    return (
        <ContractContext.Provider 
            value={{
                connectWallet,
                actingAddress,
                isLoading,
                mint,
                getOwnNfts,
                getTokenUri,
            }}
        >
            {children}
        </ContractContext.Provider>
    );
}

