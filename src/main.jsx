
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import PracticePage from './PracticePage'
import { createHashRouter, RouterProvider, HashRouter } from 'react-router-dom'
import './index.css'

const router = createHashRouter([
  {
  path: '/',
  element: <App/>,
  errorElement:
  <div className='error-container'>
    <div className='page-error-div'>Oops! That page doesnt exist</div>
  </div>,
  },

  {
    path: '/practice',
    element: <PracticePage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename='https://carlosb-dev.github.io/flashcards-app/'>
    <RouterProvider router={router}/>
  </HashRouter>
)
