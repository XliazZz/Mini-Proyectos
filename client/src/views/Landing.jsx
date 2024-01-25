import React from 'react'
import Skills from '../components/Skills'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-400 to-blue-900 min-h-screen overflow-auto pb-10">
      <div className="container max-w-5xl mx-auto px-4">

        <div className="w-4/5">
          <h1 className="mt-20 text-white text-6xl font-bold">Explora algunos<br /><span className="text-blue-400">Mini Proyectos.</span></h1>
        </div>

        <div className="w-5/6 my-10 ml-6">
          <h3 className="text-gray-300">
            Estos proyectos son para profundizar mis conocimientos <br />
            <strong className="text-white">y para aprender nuevas tecnologias o metodos</strong>
            <br />espero que lo disfrutes.
          </h3>
        </div>

        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
        </div>

        <div className="text-white relative mb-10">
          <h3 className="text-uppercase font-semibold text-center text-2xl sm:text-start mb-2">Tecnologías usadas en algunos proyectos</h3>
          <Skills/>
        </div>

        <NavLink to={'/proyects'}>
          <div className='text-center p-2 rounded-xl bg-indigo-600 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-700'>
            <button >Explorar</button>
          </div>
        </NavLink>

      </div>
    </div>
  )
}

export default Landing
