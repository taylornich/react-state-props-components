import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppMoviesList from './assignments/question2/AppMoviesList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMoviesList />
  </StrictMode>,
)
