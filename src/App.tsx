import {Routes, Route} from 'react-router-dom' // Pour la gestion de la navigation sur l'appli
import Home from './pages/Home'
import Details from './pages/Details'
/* import NotFound from './pages/NotFound' */

function App(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Details />} />

    </Routes>
  )
}
export default App


 /*      <Route path="*" element={<NotFound />} /> */