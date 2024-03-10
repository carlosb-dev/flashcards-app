import { useContext } from 'react';
import './CreateForm.css';
import { AppContext } from '../App';

export default function CreateForm() {

  const [openModal, setOpenModal] = useContext(AppContext);
  const [flashcards, setFlashcards] = useContext(AppContext);

  const addFlashcard = () => {
    setOpenModal(!openModal);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
        <textarea type="text" className='form-textarea' placeholder="Add a Question"></textarea>
        <textarea type="text" className='form-textarea' placeholder="Add the Answer"></textarea>

        <button type='submit' className="add-button" onClick={() => {addFlashcard}}>Add Question</button>
    </form>
  )
}