import {createContext, useState} from 'react';
import Title from './Title';
import Modal from './Modal';
import CreateForm from './CreateForm';
import AddFlashcardBtn from './AddFlashcardBtn';
import FlashcardList from './FlashcardList';
import './App.css'

const AppContext = createContext();

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState([]);


  return (
    <AppContext.Provider
      value = {{
        openModal,
        setOpenModal,
        flashcards,
        setFlashcards,}}
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
