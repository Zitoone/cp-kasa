import React from 'react' //Pour importer la bibliothèque React
import ReactDOM from 'react-dom/client' //Module pour intéragir avec le DOM
import App from './App' //Exporter le fichier App
import { BrowserRouter } from 'react-router-dom' //Bibliothèque pour gérer la navigation entre les pages
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import './styles/global.scss'
//CSS Composants
import './styles/header.scss'
import './styles/footer.scss'
import './styles/card.scss'
import './styles/carousel.scss'
import './styles/collapse.scss'

//CSS Pages
import './styles/home.scss'
import './styles/detail.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />    
      <Footer />
    </BrowserRouter>    
  </React.StrictMode>,
)
