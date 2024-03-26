import { useContext, useState } from 'react'
import { AppContext } from '../App'
import './FlashcardList.css'



function FlashcardList() {

  const {flashcards, setFlashcards, flashcardLS} = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  const deleteFlashcard = (item) =>{
    const newFlashcards = flashcards.filter(a =>a.id !== item)
    setFlashcards(newFlashcards);
    localStorage.setItem(flashcardLS, JSON.stringify(newFlashcards));
  }

  const openFlashcard = (item) => {
    setExpanded(!expanded);
    item.opened = expanded;
  }
  
  if (flashcards.length > 0) {
    return (
      <div className='flashcard-list-container'>
        <div className='flashcard-list-title'>
          <h2>Flashcard List</h2>
          <p>({flashcards.length} cards)</p>
        </div>

        <ul className="flashcard-list">
          {flashcards.map(flashcard => (
            <li className={`flashcard ${(flashcard.opened) ? 'f-expanded' : ''}`} key={flashcard.id}>
              
              <span
                className={`material-symbols-outlined ${(flashcard.opened) ? 'expanded' : ''}`}
                onClick={()=> {openFlashcard(flashcard)}}
              >
                expand_more
              </span>
              
              <p 
                className='question'
                onClick={()=> {openFlashcard(flashcard)}} 
              >
              {flashcard.question}
              </p>


              <span
                className={'material-symbols-outlined'}
                onClick={()=> {deleteFlashcard(flashcard.id)}}
              >
                remove
                </span>

                <p className={`answer ${(flashcard.opened) ? 'a-expanded' : ''}`}>
                  {flashcard.answer}
                </p>

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

export default FlashcardList;