import { useContext, useState } from 'react';
import './CreateForm.css';
import { AppContext } from '../App';

export default function CreateForm() {

  const [openModal, setOpenModal] = useContext(AppContext);
  const [newQuestionValue, setNewQuestionValue] = useState('');
  const [newAnswerValue, setNewAnswerValue] = useState('');

  const addFlashcard = () => {
    setOpenModal(!openModal);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Question: ", newQuestionValue, ", Answer: ", newAnswerValue);
  }

  const onChangeQ = (e) => {
    setNewQuestionValue(e.target.value)
  }

  const onChangeA = (e) => {
    setNewAnswerValue(e.target.value)
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
        <textarea type="text" className='form-textarea' placeholder="Add a Question" onChange={onChangeQ}></textarea>
        <textarea type="text" className='form-textarea' placeholder="Add the Answer" onChange={onChangeA}></textarea>

        <button type='submit' className="add-button" onClick={() => {addFlashcard}}>Add Question</button>
    </form>
  )
}