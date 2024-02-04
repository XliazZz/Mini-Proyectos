import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion" 

const Footer = () => {
  const handleClick = () => {
    window.history.back()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { pathname } = useLocation()

  return (
    <div className="flex items-end w-full">
      <footer className="w-full text-white bg-gradient-to-tr from-blue-400 to-indigo-900 body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <p className="mt-2 text-sm text-gray-50 ml-8">Miniproyectos</p>
            <div className="mt-4">
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://github.com/XliazZz" target="_blank" rel="noreferrer"   className="text-gray-50 cursor-pointer hover:text-gray-700 ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="w-7 h-7" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                  </svg>
                </a>

                <a href="https://www.instagram.com/xliazzzx/" target="_blank" rel="noreferrer"    className=" text-gray-50 cursor-pointer hover:text-gray-700 ml-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                          
                <a href="https://www.linkedin.com/in/elias-martinez-040980246/" target="_blank" rel="noreferrer" className=" text-gray-50 cursor-pointer hover:text-gray-700 ml-4">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-7 h-7" viewBox="0 0 24 24">
                    <path stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                    </path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>

              </span>
            </div>
            {pathname !== '/proyects' && (
               <Link to="#" onClick={() => handleClick()} className=''>
               <motion.button 
                 className='bg-gradient-to-br from-indigo-600 to-blue-900 p-3 rounded-lg text-white hover:bg-gradient-to-br hover:from-blue-900 hover:to-indigo-600 w-40 mt-8 flex items-center'
                 whileTap={{ scale: 0.9 }}
                 animate={{ scale: 1 }}
               >
                 <svg className="w-6 h-6 text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                 </svg>
                 <span className="ml-6">Volver</span>
               </motion.button>
             </Link>
            )
            }
          </div>

          <div className="flex flex-auto flex-grow mt-10 -mb-10 text-center md:pl-40 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-950 uppercase title-font">Secciones</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Inicio</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Juegos</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Practicas</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Fullstacks</a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-950 uppercase title-font">Informacion</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Sobre mí</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Minijuegos</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">Portfolio</a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-950 uppercase title-font">Contacto</h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">eliasdev1912@gmail.com</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-50 cursor-pointer hover:text-gray-950">+54 11-48884304</a>
                </li>
              </nav>
            </div>

              </div>
          </div>
      </footer>

    </div>
  )
}

export default Footer
