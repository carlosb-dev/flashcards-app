import { useContext } from 'react';
import {AppContext} from '../App.jsx'
import './AddFlashcardBtn.css'

function AddFlashcardBtn() {

  const {openModal, setOpenModal} = useContext(AppContext);
  
    return (
      <button className='modal-btn' id="button" onClick={() => {setOpenModal(!openModal)}}>
          <span className='material-symbols-outlined'> Add </span>
      </button>
    )
}

export default AddFlashcardBtn;