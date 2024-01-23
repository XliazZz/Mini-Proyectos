import './App.css'
import { Routes, Route } from 'react-router-dom'

import Proyects from './views/Proyects'

import Library from './Proyects/Library/Library'

import Grids from './Proyects/Grids/Grids'

import Bazar from './Proyects/Bazar/Bazar'
import Results from './Proyects/Bazar/views/Results'
import Detail from './Proyects/Bazar/views/Detail'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Proyects />}/>

        <Route path='/library' element={<Library />}/>

        <Route path='/grids' element={<Grids />}/>

        <Route path='/bazar' element={<Bazar />}/>
        <Route path='/bazar/searchs' element={<Results />}/>
        <Route path='/bazar/detail/:id' element={<Detail />}/>

      </Routes>
    </main>
  )
}

export default App;