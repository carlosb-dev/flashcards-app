import { useState } from "react";
import { Link } from "react-router-dom";
import './PracticePage.css'
import PracticeCard from "../PracticeCard";
import PracticeBtn from "../PracticeBtn";

function PracticePage() {

  const flashcards = JSON.parse(localStorage.getItem('flashcard_list'));
  const [counter, setCounter] = useState(0);
  const [question, setQuestion] = useState(flashcards[0].question);
  const [answer, setAnswer] = useState(flashcards[0].answer);

  console.log(counter)

  const nextFlashcard = () => {
    setCounter(counter+1);
    setQuestion(flashcards[counter].question);
    setAnswer(flashcards[counter].answer);
    console.log(counter);
  }

  const lastFlashcard = () => {
    setCounter(counter-1);
    setQuestion(flashcards[counter].question);
    setAnswer(flashcards[counter].answer);
    console.log(counter);
  }

  if (counter === 0) {

    return (
      <div className="main practice-page">

        <PracticeCard id ={counter} question={question} answer={answer}/>

        <Link to='/' className="practice-link">Return to Home</Link>

        <PracticeBtn id={'after'} next={nextFlashcard} last={lastFlashcard} />

      </div>
    )


  } else if (counter < flashcards.length) {

    return (
      <div className="main practice-page">

        <PracticeCard id ={counter} question={question} answer={answer}/>

        <Link to='/' className="practice-link">Return to Home</Link>


        <PracticeBtn id={'before'} next={nextFlashcard} last={lastFlashcard} />
        <PracticeBtn id={'after'} next={nextFlashcard} last={lastFlashcard} />

      </div>
    )

  } else {
    return (
      <div className="main practice-page">

        <h1>You finished!</h1>
        <Link to='/' className="link practice-link">Return to Home</Link>
        <PracticeBtn id={'before'} next={nextFlashcard} last={lastFlashcard} />
        
      </div>
    )
  }
}

export default PracticePage;