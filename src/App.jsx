import {createContext, useState} from 'react';
import Title from './Title';
import Modal from './Modal';
import CreateForm from './CreateForm';
import AddFlashcardBtn from './AddFlashcardBtn';
import FlashcardList from './FlashcardList';
import './App.css'

export const AppContext = createContext();

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [flashcards, setFlashcards] = useState([]);

  return (
    <AppContext.Provider
      value = {[
        openModal,
        setOpenModal
      ]}
    >
      <div className='main'>
        <Modal>
          <CreateForm />
        </Modal>

        <Title />

        <FlashcardList />

        <AddFlashcardBtn />

        {/* <Credits /> */}
      </div>
    </AppContext.Provider>
  )
}

export default App;
