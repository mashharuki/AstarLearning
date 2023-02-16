import Button from "../common/Button";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';

/**
 * LearnCanvas Component
 * @returns 
 */
const LearnCanvas = (props: any) => {

    const {
        contentFlg,
    } = props;

    return (
        <div className="text-center">
        <Header />
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">Learning Page</h2>
            {/* フラグによってコンテンツの内容を書き換える。 */}
            <div className="text-left  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="mx-auto rounded-t-lg" src="/Astar_ring.png" alt="Astar_ring" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            title
                        </h5>
                    </a>
                    <p className="text mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {`Hello\nCodeSandbox`}
                    </p>
                    <div className="text-center">
                        <Button 
                            name="Let's Mint NFT!" 
                            onClick={{}}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5"></div>
            <Link href="/">
                <Button name="トップへ戻る" />
            </Link>
            <Footer />
        </div>
    );
};

export default LearnCanvas;