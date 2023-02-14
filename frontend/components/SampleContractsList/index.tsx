import { useEffect, useState } from 'react';
import ContractsList from '../common/ContractList';

/**
 * SampleContractsList Component
 * @returns 
 */
const SampleContractsList = (): JSX.Element => {
  
  const navigation = {
    shiden: [
      { name: 'NFT Contract', address: 'soon' },
    ],
    shibuya: [
      { name: 'NFT Contract', address: 'Zswfvk6DnuRtFHSRa4J4Q5hFVSh1tFsenEF2y8pQ2AQxXAY' },
    ],
  };

  const [shidenContractLabel, setShidenContractLabel] = useState('');
  const [shidenContractAddress, setShidenContractAddress] = useState('');
  const [shibuyaContractLabel, setShibuyaContractLabel] = useState('');
  const [shibuyaContractAddress, setShibuyaContractAddress] = useState('');
  const [localContractLabel, setLocalContractLabel] = useState('');
  const [localContractAddress, setLocalContractAddress] = useState('');
  const [customContractLabel, setCustomContractLabel] = useState('');
  const [customContractAddress, setCustomContractAddress] = useState('');

  useEffect(() => {
    const shidenContractLabel: any = localStorage.getItem('shidenContractLabel');
    setShidenContractLabel(shidenContractLabel);
    const shidenContractAddress: any = localStorage.getItem('shidenContractAddress');
    setShidenContractAddress(shidenContractAddress);
    const shibuyaContractLabel: any = localStorage.getItem('shibuyaContractLabel');
    setShibuyaContractLabel(shibuyaContractLabel);
    const shibuyaContractAddress: any = localStorage.getItem('shibuyaContractAddress');
    setShibuyaContractAddress(shibuyaContractAddress);
    const localContractLabel: any = localStorage.getItem('localContractLabel');
    setLocalContractLabel(localContractLabel);
    const localContractAddress: any = localStorage.getItem('localContractAddress');
    setLocalContractAddress(localContractAddress);
    const customContractLabel: any = localStorage.getItem('customContractLabel');
    setCustomContractLabel(customContractLabel);
    const customContractAddress: any = localStorage.getItem('customContractAddress');
    setCustomContractAddress(customContractAddress);
  },[]);

  const saveContractInfo = (chain: string, type: string, str: string) => {
    str = str.trim();
    if (chain === 'shiden') {
      if (type === 'label') {
        setShidenContractLabel(str);
        localStorage.setItem('shidenContractLabel', str);
      } else if (type === 'address') {
        setShidenContractAddress(str);
        localStorage.setItem('shidenContractAddress', str);
      }
    } else if (chain === 'shibuya') {
      if (type === 'label') {
        setShibuyaContractLabel(str);
        localStorage.setItem('shibuyaContractLabel', str);
      } else if (type === 'address') {
        setShibuyaContractAddress(str);
        localStorage.setItem('shibuyaContractAddress', str);
      }
    } else if (chain === 'local') {
      if (type === 'label') {
        setLocalContractLabel(str);
        localStorage.setItem('localContractLabel', str);
      } else if (type === 'address') {
        setLocalContractAddress(str);
        localStorage.setItem('localContractAddress', str);
      }
    } else if (chain === 'custom') {
      if (type === 'label') {
        setCustomContractLabel(str);
        localStorage.setItem('customContractLabel', str);
      } else if (type === 'address') {
        setCustomContractAddress(str);
        localStorage.setItem('customContractAddress', str);
      }
    }
  };

  return (
    <div className="text-left max-w-6xl p-2 m-auto mt-5 w-11/12 border-[#d8d2c5] dark:border-[#323943] bg-[#f4efe2] dark:bg-[#121923] border border-1 rounded">
      <h3 className="m-1 text-xl text-center">Sample Contracts</h3>
      <ContractsList
        networkName="Shiden"
        navigation={navigation}
        contractLabel={shidenContractLabel}
        saveContractInfo={saveContractInfo}
        contractAddress={shidenContractAddress}
      />
      <ContractsList
        networkName="Shibuya"
        navigation={navigation}
        contractLabel={shibuyaContractLabel}
        saveContractInfo={saveContractInfo}
        contractAddress={shibuyaContractAddress}
      />
      <ContractsList
        networkName="Local"
        navigation={navigation}
        contractLabel={localContractLabel}
        saveContractInfo={saveContractInfo}
        contractAddress={localContractAddress}
      />
      <ContractsList
        networkName="Custom"
        navigation={navigation}
        contractLabel={customContractLabel}
        saveContractInfo={saveContractInfo}
        contractAddress={customContractAddress}
      />
    </div>
  );
};

export default SampleContractsList;