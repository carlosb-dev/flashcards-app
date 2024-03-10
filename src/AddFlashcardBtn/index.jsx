import { useContext } from 'react';
import {AppContext} from '../App.jsx'
import './AddFlashcardBtn.css'

function AddFlashcardBtn() {


  //TODO: hacer que el boton gire onClick

  const [openModal, setOpenModal] = useContext(AppContext);
  const buttonIcon = document.getElementById("button-icon");

  if (openModal) {
    buttonIcon?.classList.add("opened")
    console.log(buttonIcon)

  } else {
    buttonIcon?.classList.remove("opened")
  }

  return (
    <button className='modal-btn' onClick={() => {setOpenModal(!openModal)}}>
        <span
          className={`material-symbols-outlined`}
          id="button-icon"
        >
          Add 
        </span>
    </button>
  )
}

export default AddFlashcardBtn;