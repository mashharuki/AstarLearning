import Header from '../common/Header';
import Footer from '../common/Footer';
import Card from '../common/Card';
import Link from 'next/link';
import Button from '../common/Button';


/**
 * NftCanvas Component
 * @returns 
 */
const NftCanvas = () => {


  return (
    <div className="text-center">
      <Header />
        <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">現在受講可能な学習コース</h2>
        <Card/>
        <div className="mt-5 mb-5"></div>
        <Link href="/nfts">
            <Button name="NFTを確認する" />
        </Link>
      <Footer />
    </div>
  );
};

export default NftCanvas;