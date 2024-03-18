import { useContext, useState } from 'react';
import { AppContext } from '../App.jsx';
import './CreateForm.css';

  let nextId = 0

export default function CreateForm() {

  const {flashcards, setFlashcards} = useContext(AppContext);
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');

  console.log(flashcards)

  const updateFlashcards = (e) => {
    e.preventDefault();

    if (questionValue && answerValue) {
      setFlashcards([
        ...flashcards,
        {id: nextId++, question: questionValue, answer: answerValue}
      ]);

    } else {
      alert( "Please enter both a question and an answer.");
    }
  }

  return (
    <form className="form-container">
        <textarea type="text" className='form-textarea' placeholder="Add a Question"
          onChange={(e) => {setQuestionValue(e.target.value)}}
        ></textarea>
        <textarea type="text" className='form-textarea' placeholder="Add the Answer"
          onChange={(e) => {setAnswerValue(e.target.value)}}
        ></textarea>

        <button
          type='submit'
          className="add-button"
          onClick={updateFlashcards}
        >
          + Add Question
        </button>
    </form>
  )
}