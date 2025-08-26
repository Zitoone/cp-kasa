import React from 'react' //Pour importer la bibliothèque React
import ReactDOM from 'react-dom/client' //Module pour intéragir avec le DOM
import App from './App' //Exporter le fichier App
import { BrowserRouter } from 'react-router-dom' //Bibliothèque pour gérer la navigation entre les pages
import Header from './components/Header.tsx'


import './styles/global.scss'
import './styles/header.scss'
import './styles/card.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />    
    </BrowserRouter>    
  </React.StrictMode>,
)
