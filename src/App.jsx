import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Modal from './Modal';
import CreateForm from './CreateForm';
import AddFlashcardBtn from './AddFlashcardBtn';
import FlashcardList from './FlashcardList';
import './App.css';

const AppContext = createContext();
const flashcardLS = 'flashcard_list';


function App() {

  const [nextId, setNextId] = useState(JSON.parse(localStorage.getItem( "nextId" )) || 0);
  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState(JSON.parse(localStorage.getItem( flashcardLS )) || []);
  const [expanded, setExpanded] = useState(false);
  const [renderState, setRenderState] = useState('main');

  const addFlashcard = (flashcards) => {
    const item = JSON.stringify(flashcards);
    localStorage.setItem(flashcardLS, item);
  }

  return (
    <AppContext.Provider
      value = {{
        renderState,
        setRenderState,
        expanded,
        setExpanded,
        flashcardLS,
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

        <FlashcardList />

        <Link to='/practice'>Start Practice</Link>
        
        <AddFlashcardBtn />

      </div>

    </AppContext.Provider>
  )
}

export {App, AppContext};
