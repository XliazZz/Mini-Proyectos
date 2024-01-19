import './App.css'
import { Routes, Route } from 'react-router-dom'

import Library from './Proyects/Library/Library'
import Proyects from './views/Proyects'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/library' element={<Library />}/>
        <Route path='/' element={<Proyects />}/>
      </Routes>
    </main>
  )
}

export default App;