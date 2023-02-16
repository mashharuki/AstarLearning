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
        <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">あなたが獲得したNFT</h2>
        <Card/>
        <div className="mt-5 mb-5"></div>
        <Link href="/">
            <Button name="トップへ戻る" />
        </Link>
      <Footer />
    </div>
  );
};

export default NftCanvas;