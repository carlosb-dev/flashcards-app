import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import PracticePage from './PracticePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
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
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
