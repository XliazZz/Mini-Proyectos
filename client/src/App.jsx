import './App.css'
import { Routes, Route } from 'react-router-dom'

import Proyects from './views/Proyects'
import Landing from './views/Landing'

import Library from './Proyects/Library/Library'

import Grids from './Proyects/Grids/Grids'

import Bazar from './Proyects/Bazar/Bazar'
import Results from './Proyects/Bazar/views/Results'
import Detail from './Proyects/Bazar/views/Detail'

import TicTacToe from './Proyects/TicTacToe/TicTacToe'
function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/proyects' element={<Proyects />}/>

        <Route path='proyects/library' element={<Library />}/>

        <Route path='proyects/grids' element={<Grids />}/>

        <Route path='proyects/bazar' element={<Bazar />}/>
        <Route path='proyects/bazar/searchs' element={<Results />}/>
        <Route path='proyects/bazar/detail/:id' element={<Detail />}/>

        <Route path='proyects/tictactoe' element={<TicTacToe />}/>
      </Routes>
    </main>
  )
}

export default App;