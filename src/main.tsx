import React from 'react' //Pour importer la bibliothèque React
import ReactDOM from 'react-dom/client' //Module pour intéragir avec le DOM
import App from './App.tsx' //Exporter le fichier App
import { BrowserRouter } from 'react-router-dom' //Bibliothèque pour gérer la navigation entre les pages

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />    
    </BrowserRouter>    
  </React.StrictMode>,
)
