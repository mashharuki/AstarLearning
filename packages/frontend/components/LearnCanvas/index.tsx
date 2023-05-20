import Button from "../common/Button";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContractContext } from '../../context';
import Loading from "../common/Loading";

import { useState } from "react";
import QuizModal from "./QuizModal";


import { marked } from 'marked';

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
        contentInfos,
    }:any = useContractContext();

    // Search content
    let content = null;
    contentInfos.map((e) => {
      if (contentFlg != e.content_id) {
        return;
      }
      content = e;
    });
    if (content == null) {
      alert("Not Found.");
    }

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
                            <div className="text-left flex flex-wrap justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#" class="py-10 w-2/6">
                                    <img className="mx-auto rounded-t-lg" src={content.image_url} alt={content.title} />
                                </a>
                                <div className="p-5 w-3/4">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {content.title} Learing Course
                                        </h5>
                                    </a>
                                    <div className="content-container mb-3 text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: content.content}} />
                                    <div className="text-center mb-5">
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
                            <QuizModal isOpen={isOpenModal} onRequestClose={() => setOpenModal(false)} ariaHideApp={false} quizs={content.quizs} answer={content.answer} intro={content.intro} />
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
