import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import Proyects from './views/Proyects';
import Landing from './views/Landing';
import Footer from './components/Footer';

import Library from './Proyects/Library/Library';

import Grids from './Proyects/Grids/Grids';

import Bazar from './Proyects/Bazar/Bazar';
import Results from './Proyects/Bazar/views/Results';
import Detail from './Proyects/Bazar/views/Detail';

import TicTacToe from './Proyects/TicTacToe/TicTacToe';

import MemoryGame from './Proyects/MemoryGame/MemoryGame';

import Keyboard from './Proyects/Keyboard/Keyboard';


function App() {
  const { pathname } = useLocation()

  const pageToTop = () => {

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  } 

  return (
    <main>
      <Routes>
        <Route handle={pageToTop()} path='/' element={<Landing />}/>
        <Route handle={pageToTop()} path='/proyects' element={<Proyects />}/>

        <Route handle={pageToTop()} path='proyects/library' element={<Library />}/>

        <Route handle={pageToTop()} path='proyects/grids' element={<Grids />}/>

        <Route handle={pageToTop()} path='proyects/bazar' element={<Bazar />}/>
        <Route handle={pageToTop()} path='proyects/bazar/searchs' element={<Results />}/>
        <Route handle={pageToTop()} path='proyects/bazar/detail/:id' element={<Detail />}/>

        <Route handle={pageToTop()} path='proyects/tictactoe' element={<TicTacToe />}/>

        <Route handle={pageToTop()} path='proyects/memorygame' element={<MemoryGame />}/>
        
        <Route handle={pageToTop()} path='proyects/keyboard' element={<Keyboard />}/>
      </Routes>

      {pathname !== '/' && <Footer />}
    </main>
  )
}

export default App;