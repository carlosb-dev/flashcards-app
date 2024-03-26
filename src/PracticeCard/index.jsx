import { useState } from 'react';
import './PracticeCard.css'

/* eslint-disable react/prop-types */
function PracticeCard({id, question, answer}) {

  const [clicked, setClicked] = useState(false);

  return (
    <div className={`question-wrapper ${(clicked) ? 'rotate' : ''}`} onClick={()=>{setClicked(!clicked)}}>
        <p className={`ongame-question ${(clicked) ? 'hide' : ''}`}>{id+1}. {question}</p>
        <p className={`ongame-answer ${(clicked) ? 'show' : ''}`}>{answer}</p>
    </div>
  )
}

export default PracticeCard;