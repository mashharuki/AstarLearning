/**
 * ContractsList Component
 * @returns 
 */
const ContractsList = (props: any): JSX.Element => {
  
    // 引数から値を取得する。
    const {
        networkName,
        navigation,
        contractLabel,
        saveContractInfo,
        contractAddress
    } = props;

  return (
    
    <dl role="list" className="m-1 break-all">
        <dt className="m-1 text-xl">{networkName}</dt>
        {navigation.shiden.map((item:any) => (
          <dd className="m-2 ml-6" key={item.name}>{item.name}: <span>{item.address}</span></dd>
        ))}
        <dd className="ml-4">
            <div className='w-[95%] max-w-[700px]'>
                <input
                    className="w-[45%] md:w-[30%] md:max-w-[150px] p-2 m-2 mr-0 bg-[#dcd6c8] dark:bg-[#020913] border-2 border-[#95928b] dark:border-gray-500 rounded"
                    onChange={(event) => saveContractInfo('shiden', 'label', event.target.value)}
                    placeholder="Label"
                    value={contractLabel}
                />
                <input
                    className="w-[95%] md:w-[70%] md:max-w-[500px] p-2 m-2 bg-[#dcd6c8] dark:bg-[#020913] border-2 border-[#95928b] dark:border-gray-500 rounded"
                    onChange={(event) => saveContractInfo('shiden', 'address', event.target.value)}
                    placeholder="Shiden contract address here"
                    value={contractAddress}
                />
            </div>
        </dd>
    </dl>
  );
};

export default ContractsList;