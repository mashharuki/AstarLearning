import { createContext, useContext, useState } from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { BLOCKCHAINS } from '../components/common/Constant';
import { ApiPromise, WsProvider } from '@polkadot/api';

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
    };

    return (
        <ContractContext.Provider 
            value={{
                connectWallet,
                actingAddress,
            }}
        >
            {children}
        </ContractContext.Provider>
    );
}

