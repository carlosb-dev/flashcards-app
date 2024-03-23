import { useContext } from 'react'
import './FlashcardList.css'
import { AppContext } from '../App'



function FlashcardList(props) {

  const {flashcards} = useContext(AppContext);

  if (flashcards.length > 0) {
    return (
      <div className='flashcard-list-cotainer'>
        <h2>Flashcard List</h2>

        <ul className="flashcard-list">
          {/* eslint-disable react/prop-types */}
          {props.children}
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