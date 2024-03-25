import './PracticeBtn.css'

/* eslint-disable react/prop-types */
function PracticeBtn({next, last, id}) {

  var fn;

  if (id === 'before') {
    fn = last;

  } else {
    fn = next;
  }

  return (
    <button className={`practice-btn ${(id === 'before') ? 'before' : 'after'}`} onClick={fn}>
        <span className='material-symbols-outlined'> arrow_right_alt </span>
    </button>
  )
}

export default PracticeBtn;