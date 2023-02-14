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
        <dd className="ml-4">
            <div className='w-[95%] max-w-[700px]'>
                <input
                    className="w-[45%] md:w-[30%] md:max-w-[150px] p-2 m-2 mr-0 bg-[#dcd6c8] dark:bg-[#020913] border-2 border-[#95928b] dark:border-gray-500 rounded"
                    onChange={(event) => saveContractInfo(`${networkName}`, 'label', event.target.value)}
                    placeholder="Label"
                    value={contractLabel}
                />
                <input
                    className="w-[95%] md:w-[70%] md:max-w-[500px] p-2 m-2 bg-[#dcd6c8] dark:bg-[#020913] border-2 border-[#95928b] dark:border-gray-500 rounded"
                    onChange={(event) => saveContractInfo(`${networkName}`, 'address', event.target.value)}
                    placeholder="contract address here"
                    value={contractAddress}
                />
            </div>
        </dd>
    </dl>
  );
};

export default ContractsList;