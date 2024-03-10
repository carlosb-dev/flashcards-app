import { useContext } from 'react';
import './CreateForm.css';
import { AppContext } from '../App';

export default function CreateForm() {

  const [openModal, setOpenModal] = useContext(AppContext);

  return (
    <div className="form-container">
        <input type="text" placeholder="Add a Question"></input>
        <input type="text" placeholder="Add the Answer"></input>

        <button className="add-button" onClick={() => {setOpenModal(!openModal)}}>Add Question</button>
    </div>
  )
}