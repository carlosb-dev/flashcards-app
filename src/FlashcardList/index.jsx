import { useContext, useState } from 'react'
import './FlashcardList.css'
import { AppContext } from '../App'

let nextId = 0

function FlashcardList() {

  const {flashcards} = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  const openFlashcard = (item) => {
    setExpanded(!expanded)
    item.opened = expanded
  }

  if (flashcards.length > 0) {
    return (
      <div className='flashcard-list-cotainer'>
        <h2>Flashcard List</h2>

        <ul className="flashcard-list">

          {flashcards.map(flashcard => (
            <li className='flashcard' key={nextId++}>
              
              <p className='question'
                onClick={()=> {openFlashcard(flashcard)}} 
              >
              {flashcard.question}
              </p>

              <span
                className={`material-symbols-outlined ${(flashcard.opened) ? 'expanded' : ''}`}
                onClick={()=> {openFlashcard(flashcard)}}
              >expand_more</span>

              <p className={`answer ${(flashcard.opened) ? 'a-expanded' : ''}`}>{flashcard.answer}</p>
            </li>
          ))}

        </ul>
      </div>
    )

  } else {
    return (
      <div className='flashcard-list-cotainer'>
      <h2>Flashcard List</h2>
        <ul className="flashcard-list">
          <div className='no-flashcards'>Add a flashcard and it will appear here!</div>
        </ul>
        
      </div>
    )
  }

}

export default FlashcardList