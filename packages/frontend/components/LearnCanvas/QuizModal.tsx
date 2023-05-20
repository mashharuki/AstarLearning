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
    const [isCorrect, setCorrect] = useState();

    // local action
    const answer = () => {
      console.log("Your Choice is ", choice);
      setCorrect(choice == props.quizs[props.answer]);
    };
    const onChangeChoice = (e) => {
      setChoice(e.target.value);
    };

    // closeModal
    if (!props.isOpen) {
      return <></>
    }

    return (
<Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} ariaHideApp={false}>
  <header>
    <h1>QuizModal</h1>
  </header>
  <main>
    <p>{props.intro}</p>
    <ul>
      {props.quizs.map((c) => {
        return <li key={c} className="my-1"><label><input type="radio" name="choice" value={c} onChange={onChangeChoice} />{c}</label></li>
      })}
    </ul>
  </main>
  <footer className="text-right">
    <Button name="Answer" onClick={answer} />
    &nbsp;
    {choice ?
      <>
      {isCorrect ?
        <Button name="mint NFT" onClick={props.mint} />
        :
        <span>Your answer is wrong!</span>
      }
      </>
      :
      <span>not yet answer.</span>
    }
  </footer>
</Modal>
    );
};

export default QuizModal;
