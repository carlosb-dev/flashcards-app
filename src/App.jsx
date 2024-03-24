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

localStorage.setItem(flashcardLS, JSON.stringify(
  [
    {
      "id": 0,
      "question": "¿Cuáles son los cinco tipos de sabores primarios?",
      "answer": "Los sabores primarios son dulce, amargo, ácido, salado y umami.",
      "opened": false
    },
    {
      "id": 1,
      "question": "¿Cuál es el lugar más frío de la Tierra?",
      "answer": "La Antártida, que está cubierta de capas con un espesor de entre dos mil y tres mil metros.",
      "opened": false
    },
    {
      "id": 2,
      "question": "¿Quién escribió La Odisea?",
      "answer": "Este poema de 24 cantos fue escrito por Homero.",
      "opened": false
    },
    {
      "id": 3,
      "question": "¿Cómo se llama la capital de Mongolia?",
      "answer": "La capital de Mongolia es Ulan Bator.",
      "opened": false
    },
    {
      "id": 4,
      "question": "¿Cuál es el río más largo del mundo?",
      "answer": "Aunque algunos pueden creer que es el Nilo, en realidad es el Amazonas.",
      "opened": false
    },
    {
      "id": 5,
      "question": "¿Cómo se llama la Reina del Reino Unido?",
      "answer": "La actual monarca británica se llama Isabel II.",
      "opened": false
    },
    {
      "id": 6,
      "question": "¿En qué continente está Ecuador?",
      "answer": "Ecuador es un país latinoamericano y, por tanto, se encuentra en América.",
      "opened": false
    },
    {
      "id": 7,
      "question": "¿Dónde originaron los Juegos Olímpicos?",
      "answer": "Se originaron en Grecia, y se llamaban así porque se celebraban en la ciudad de Olimpia.",
      "opened": false
    },
    {
      "id": 8,
      "question": "¿Qué tipo de animal es la ballena?",
      "answer": "La ballena es un mamífero marino de hasta 30 metros de longitud.",
      "opened": false
    },
    {
      "id": 9,
      "question": "¿De qué colores es la bandera de México?",
      "answer": "La bandera de México está compuesta por tres colores: verde, blanco y rojo.",
      "opened": false
    },
    {
      "id": 10,
      "question": "¿Cuántos huesos tiene el cuerpo humano?",
      "answer": "Un adulto tiene 206 huesos, mientras que los recién nacidos tienen alrededor de 300 huesos.",
      "opened": false
    }
  ]
))

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

        <Link to='/practice' className="link">Start Practice</Link>
        
        <AddFlashcardBtn />

      </div>

    </AppContext.Provider>
  )
}

export {App, AppContext};
