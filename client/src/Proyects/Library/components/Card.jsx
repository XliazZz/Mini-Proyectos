/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addBookInList, deleteBook } from "../../../redux/Library/librarySlice";

const Card = ({ cover, synopsis, showSynopsis = true, showButton = false, title, pages, genre, year, ISBN, author }) => {
  const dispatch = useDispatch();

  const myListFromLocalStorage = JSON.parse(localStorage.getItem('myList')) || [];
  const myList = useSelector((state) => state?.library.myList) || myListFromLocalStorage;

  const inList = myList.some((book) => book.ISBN === ISBN);
  
  const handleList = async () => {
    if (inList) {
      await dispatch(deleteBook(ISBN)); 
    } else {
      dispatch(addBookInList({ cover, synopsis, title, pages, genre, year, ISBN, author }));
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
      className="relative"
      >

      <motion.div 
        className={showButton ? "bg-red-400 -mb-72 p-0 cursor-pointer rounded-lg" : "group rounded-lg relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/500"}
        style={{ width: "220px", height: "350px"}}       
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0, }}
        exit={{ opacity: 0, y: 90 }}
        
        transition={{ duration: 0.3 }}
        whileHover={showButton ? { y: showButton ? -45 : 0 } : {}}
      >

        <div className="h-60 w-44 relative">
          {showButton && (
            <div className="absolute bottom-48 bg-zinc-950 rounded-full -right-9">
              <motion.button
                type="button"
                className="text-white rounded-full outline-none px-3 py-2 hover:bg-gray-900"
                onClick={handleList}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                X
              </motion.button>
            </div>
          )}

          <img className="rounded-lg m-0 p-0" style={{minWidth: "220px", minHeight: "350px"}} src={cover} alt="Imagen del libro" />
        </div>

          {showSynopsis && (
          <div>
            <div className="absolute inset-0 h-screen bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center "
              initial={{ opacity: 0, y: 90 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mb-3 text-sm italic text-white">{synopsis}</p>
              <button 
                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm  text-white shadow shadow-black/60"
                onClick={handleList}  
              >
                {
                  inList ? "Eliminar de mi lista" : "Agregar a mi lista"
                }
              </button>
            </motion.div>
          </div>
          )}
        
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card;