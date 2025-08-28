import {Routes, Route} from 'react-router-dom' // Pour la gestion de la navigation sur l'appli
import Home from './pages/Home'
import Details from './pages/Details'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default App


      