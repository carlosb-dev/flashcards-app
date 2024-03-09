import { Title } from './Title';
import CreateSection from './CreateSection';
import CreateInput from './CreateInput'
import './App.css'

function App() {

  return (
    <div className='main'>
      <Title />

      <CreateSection>
        <CreateInput />
      </CreateSection>
{/* 
      <StartButton />

      <Credits /> */}
    </div>
  )
}

export default App;
