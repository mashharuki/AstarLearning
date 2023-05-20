import { useState } from "react";
import Modal from 'react-modal'

import Button from "../common/Button";


/**
 * QuizModal Component
 * @returns 
 */
const QuizModal = (props) => {
    // state
    const [choice, setChoice] = useState();
    const [answered, setAnswered] = useState();

    // local action
    const answer = () => {
      console.log("Your Choice is ", choice);
      setAnswered(true);
    };
    const onChangeChoice = (e) => {
      setChoice(e.target.value);
      setAnswered(false);
    };

    // closeModal
    if (!props.isOpen) {
      return <></>
    }

    return (
<Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} ariaHideApp={false}>
  <div className="flex flex-wrap justify-center">
    <header className="w-3/4">
      <h2 className="text-2xl">Quiz</h2>
    </header>
    <main className="w-3/4">
      <p className="text-red-600">TODO: no quiz sentence.</p>
      <ul>
        {props.quizs.map((c) => {
          return <li key={c} className="my-1"><label><input type="radio" name="choice" value={c} onChange={onChangeChoice} />{c}</label></li>
        })}
      </ul>
      <div className="text-right">
        <Button name="Answer" onClick={answer} />
      </div>
    </main>
    <footer className="text-center mt-20">
      {answered ?
        <>
        {choice == props.quizs[props.answer] ?
          <>
            <p className="mb-10 text-5xl leading-relaxed">Your answer is Correct!!<br />You can mint the NFT!!</p>
            <Button name="mint NFT" onClick={props.onMintNft} />
          </>
          :
          <>
            <p className="mb-10 text-red-600 text-3xl leading-relaxed">Your answer is wrong!!<br />Please select the correct answer.</p>
            <Button name="back to Learn" onClick={props.onRequestClose} />
          </>
        }
        </>
        :
        <p className="mb-10 text-3xl leading-relaxed">You have not answered yet.</p>
      }
    </footer>
  </div>
</Modal>
    );
};

export default QuizModal;
