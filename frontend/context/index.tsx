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
import wasmNftAbi from '../metadata/nft.json';

// NFT用のデータ型
export type NftInfo = {
    name: string | undefined;
    image: string | undefined;
    description:string | undefined;
};

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
    const [nftInfos, setNftInfos] = useState<NftInfo[]>([]);
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
        await checkBalanceOf(api, 'wasm');
        await getInfo(api, 'wasm');
        //await checkBalanceOf(api, 'wasm');
    };

    /**
     * getNftInfos function
     */
    const getNftInfos = async(api:any) => {

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
     * checkBalanceOf function
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     */
    const checkBalanceOf = async(api:any, contentFlg: string) => {
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

        // call psp34::balanceOf メソッド
        const {result, output} = 
            await contract.query['psp34::balanceOf'](
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },
                actingAddress
            );

        // The actual result from RPC as `ContractExecResult`
        console.log(result.toHuman());

        // check if the call was successful
        if (result.isOk) {
            const outputData: any = output;
            console.log('Success', outputData.toString());
            return outputData.toString();
        } else {
            return '';
        }
    }

    /**
     * getInfo function
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     * @returns own nft's id
     */
    const getInfo = async(api:any, contentFlg: string) => {
        
        // call getNftName メソッド
        const name = await getNftName(api, contentFlg);
        // call getNftImage メソッド
        const image = await getNftImage(api, contentFlg);
        // call getNftDescription メソッド
        const discription = await getNftDecription(api, contentFlg);
        
        // NFTの情報を格納する変数
        let nftInfo: NftInfo = {
            name: name,
            image: image,
            description: discription,
        };

        console.log("nftInfo", nftInfo)
        setNftInfos([...nftInfos, nftInfo]);
    };

    /**
     * getNftName
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     */
    const getNftName = async(api: any, contentFlg: string) => {
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

        // call getNftName メソッド
        const {result, output} = 
            await contract.query.getNftName(
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },);

        // check if the call was successful
        if (result.isOk) {
            const outputData: any = output;
            // json形式にして再び取得する。
            const jsonData = JSON.parse(outputData.toString());
            const name:string = jsonData.ok;
            return name;
        } else {
            console.error('error');
        }
    };

    /**
     * getNftImage
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     */
    const getNftImage = async(api: any, contentFlg: string) => {
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

        // call getNftName メソッド
        const {result, output} = 
            await contract.query.getIamge(
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },);

        // check if the call was successful
        if (result.isOk) {
            const outputData: any = output;
            // json形式にして再び取得する。
            const jsonData = JSON.parse(outputData.toString());
            const image:string = jsonData.ok;
            return image;
        } else {
            console.error('error');
        }
    };

    /**
     * getNftDecription
     * @param api APIオブジェクト
     * @param contentFlg コンテンツフラグ
     */
    const getNftDecription = async(api: any, contentFlg: string) => {
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

        // call getNftName メソッド
        const {result, output} = 
            await contract.query.getNftDescription(
                contractAddress,
                {
                    gasLimit: api.registry.createType('WeightV2', {
                        refTime,
                        proofSize,
                    }) as WeightV2,
                    storageDepositLimit,
                },);

        // check if the call was successful
        if (result.isOk) {
            const outputData: any = output;
            // json形式にして再び取得する。
            const jsonData = JSON.parse(outputData.toString());
            const description:string = jsonData.ok;
            return description;
        } else {
            console.error('error');
        }
    }; 

    return (
        <ContractContext.Provider 
            value={{
                connectWallet,
                actingAddress,
                isLoading,
                nftInfos,
                mint,
            }}
        >
            {children}
        </ContractContext.Provider>
    );
}

