import Header from '../common/Header';
import Footer from '../common/Footer';
import LearnCard from '../common/LearnCard';
import Link from 'next/link';
import Button from '../common/Button';
import { useContractContext } from './../../context'


/**
 * NftCanvas Component
 * @returns 
 */
const NftCanvas = () => {

  // create contract
  const {
    actingAddress,
  } = useContractContext();

  return (
    <div className="text-center">
      <Header />
      {actingAddress !== '' ?
        <>
          <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">現在受講可能な学習コース</h2>
          <LearnCard/>
          <div className="mt-5 mb-5"></div>
          <Link href="/nfts">
            <Button name="NFTを確認する" />
          </Link>
        </>
      :  
        <h2 className="text-2xl font-bold tracking-tight h-screen w-screen flex justify-center items-center text-white-900">Please connect wallet</h2>
      }
      <Footer />
    </div>
  );
};

export default NftCanvas;