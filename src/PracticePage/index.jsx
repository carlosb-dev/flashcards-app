

function PracticePage() {

  const flashcards = JSON.parse(localStorage.getItem('flashcard_list'))

  console.log(flashcards)

  return (
    <div className="main">
      {flashcards.map((flashcard)=>(
        <div key={flashcard.id}>
          <p>{flashcard.question}</p>
          <p>{flashcard.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default PracticePage;