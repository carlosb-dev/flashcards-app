import { useState } from "react";
import { Link } from "react-router-dom";
import './PracticePage.css'

function PracticePage() {

  const flashcards = JSON.parse(localStorage.getItem('flashcard_list'));
  const [counter, setCounter] = useState(1);
  const [question, setQuestion] = useState(flashcards[0].question);
  const [answer, setAnswer] = useState(flashcards[0].answer);

  const nextFlashcard = () => {
    setCounter(counter+1);
    setQuestion(flashcards[counter].question);
    setAnswer(flashcards[counter].answer);
    console.log(counter);
  }

  if (counter <= flashcards.length) {

    console.log('fl', flashcards.length)

    return (
      <div className="main" onClick={nextFlashcard}>
        <div className="question-wrapper">
          <p className="ongame-question">{question}</p>
          <p className="ongame-answer">{answer}</p>
        </div>
      </div>
    )

  } else {
    return (
      <div className="main">
        <h1>You finished!</h1>
        <Link to='/' className="link">Return to Home</Link>
      </div>
    )
  }

}

export default PracticePage;