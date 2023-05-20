import Button from "../common/Button";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContractContext } from '../../context';
import Loading from "../common/Loading";
import Astar from "./LearnContent/Astar";
import Shiden from "./LearnContent/Shiden";
import Wasm from "./LearnContent/Wasm";

import { useState } from "react";
//import Modal from 'react-modal'
import QuizModal from "./QuizModal";

/**
 * LearnCanvas Component
 * @returns 
 */
const LearnCanvas = () => {
    // state
    const [isOpenModal, setOpenModal] = useState(false);

    const router = useRouter();
    // クエリパラメータから値を取得する。
    const { contentFlg } = router.query;

    // create contract
    const {
        actingAddress,
        mint,
        good,
        quiz,
        cheer,
        isLoading,
    }:any = useContractContext();

    // Mock
    let quiz_mock = {
      question: "質問です。質問です。質問です。わかりますか？",
      choices: [
        "選択肢１",
        "選択肢２",
        "選択肢３",
        "選択肢４",
        "選択肢５",
      ],
      correct: "選択肢３"
    };

    return (
        <div className="text-center">
            <Header />
            {actingAddress !== '' ?
                <>
                    {isLoading ? 
                        <Loading/>
                    :
                        <>
                            <h2 className="text-2xl font-bold tracking-tight mb-5 text-white-900">Learning Page</h2>
                            {/* フラグによってコンテンツの内容を書き換える。 */}
                            <div className="text-left  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    {contentFlg == 'wasm' && <img className="mx-auto rounded-t-lg" src="/wasm-logo.png" alt="Astar_ring" />}
                                    {contentFlg == 'astar' && <img className="mx-auto rounded-t-lg" src="/Astar_ring.png" alt="Astar_ring" />}
                                    {contentFlg == 'shiden' && <img className="mx-auto rounded-t-lg h-80" src="/Shiden-Symbol.png" alt="Astar_ring" />}
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {contentFlg} Learing Course
                                        </h5>
                                    </a>
                                    <p className="text mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {contentFlg === 'wasm' && <Wasm/>}
                                        {contentFlg === 'astar' && <Astar/>}
                                        {contentFlg === 'shiden' && <Shiden/>}
                                    </p>
                                    <div className="text-center">
                                        <Button 
                                            name="Good" 
                                            onClick={() => good()}
                                        />
                                        &nbsp;
                                        <Button 
                                            name="Quiz" 
                                            onClick={() => setOpenModal(true)}
                                        />
                                        &nbsp;
                                        <Button 
                                            name="Cheer" 
                                            onClick={() => cheer(contentFlg)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 mb-5"></div>
                            <Link href="/">
                                <Button name="トップへ戻る" />
                            </Link>
                            <QuizModal isOpen={isOpenModal} onRequestClose={() => setOpenModal(false)} ariaHideApp={false} quiz={quiz_mock}>
                            </QuizModal>
                        </> 
                    }
                </>
            :
                <h2 className="text-2xl font-bold tracking-tight h-screen w-screen flex justify-center items-center text-white-900">Please connect wallet</h2>
            }  
            <Footer />
        </div>
    );
};

export default LearnCanvas;
