import {createContext, useEffect, useState} from 'react';
import Title from './Title';
import Modal from './Modal';
import CreateForm from './CreateForm';
import AddFlashcardBtn from './AddFlashcardBtn';
import FlashcardList from './FlashcardList';
import useLocalStorage from './useLocalStorage';
import './App.css'

const AppContext = createContext();
const flashcardLS = 'flashcard_list';

function App() {

  const items = useLocalStorage(flashcardLS, []).item;

  const [openModal, setOpenModal] = useState(false);
  
  const [flashcards, setFlashcards] = useState([]);
  
  useEffect(() => {
    setFlashcards(items);
  },[items])

  const addFlashcard = (flashcards) => {
    const item = JSON.stringify(flashcards);
    localStorage.setItem(flashcardLS, item);
  }

  return (
    <AppContext.Provider
      value = {{
        openModal,
        setOpenModal,
        flashcards,
        setFlashcards,
        addFlashcard
      }}
    >
      <div className='main'>
        <Modal>
          <CreateForm />
        </Modal>

        <Title />

        <FlashcardList />

        <AddFlashcardBtn />

      </div>
    </AppContext.Provider>
  )
}

export {App, AppContext};
