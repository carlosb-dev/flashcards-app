import { createContext, useState } from 'react';
import Title from './Title';
import Modal from './Modal';
import CreateForm from './CreateForm';
import AddFlashcardBtn from './AddFlashcardBtn';
import FlashcardList from './FlashcardList';
import './App.css'

const AppContext = createContext();
const flashcardLS = 'flashcard_list';


function App() {

  const [nextId, setNextId] = useState(JSON.parse(localStorage.getItem( "nextId" )) || 0);
  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState(JSON.parse(localStorage.getItem( flashcardLS )) || []);
  const [expanded, setExpanded] = useState(false);

  const addFlashcard = (flashcards) => {
    const item = JSON.stringify(flashcards);
    localStorage.setItem(flashcardLS, item);
  }

  const deleteFlashcard = (item) => {
    const newFlashcards = flashcards.filter(a =>a.id !== item)
    setFlashcards(newFlashcards);
    localStorage.setItem(flashcardLS, JSON.stringify(newFlashcards));
  }

  const openFlashcard = (item) => {
    setExpanded(!expanded);
    item.opened = expanded;
  }

  return (
    <AppContext.Provider
      value = {{
        openModal,
        setOpenModal,
        flashcards,
        setFlashcards,
        addFlashcard,
        nextId,
        setNextId
      }}
    >
      <div className='main'>
        <Modal>
          <CreateForm />
        </Modal>

        <Title />

        <FlashcardList>
          {flashcards.map(flashcard => (
            <li className='flashcard' key={flashcard.id}>
              
              <span
                className={`material-symbols-outlined ${(flashcard.opened) ? 'expanded' : ''}`}
                onClick={()=> {openFlashcard(flashcard)}}
              >expand_more</span>
              
              <p className='question'
                onClick={()=> {openFlashcard(flashcard)}} 
              >
              {flashcard.question}
              </p>


              <span
                className={'material-symbols-outlined'}
                onClick={()=> {deleteFlashcard(flashcard.id)}}
              >remove</span>

              <p className={`answer ${(flashcard.opened) ? 'a-expanded' : ''}`}>{flashcard.answer}</p>
            </li>
           ))}
        </FlashcardList>

        <AddFlashcardBtn />

      </div>
    </AppContext.Provider>
  )
}

export {App, AppContext};
