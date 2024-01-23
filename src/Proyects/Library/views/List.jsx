import Card from "../components/Card";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const List = () => {
  const myListFromLocalStorage = JSON.parse(localStorage.getItem('myList')) || [];
  const myList = useSelector((state) => state?.library.myList) || myListFromLocalStorage;
  
  return (
    <motion.div 
      className="relative h-full flex bg-gray-900 flex-col justify-start items-center border rounded-xl border-blue-300 max-h-screen overflow-y-auto"
      initial={{ opacity: 0, x: 90 }}
      animate={{ opacity: 1, x: 0, }}
      transition={{ duration: 0.3 }}
    >        
      <div className="absolute inset-x-0 top-0 text-center w-full z-50">
        <h1 className="font-extrabold text-4xl bg-gray-900 p-4 ">Lista de lectura</h1>
        {myList?.length === 0 && (
          <div className="text-center text-red-300 text-2xl font-bold mt-10">
            No hay libros en la lista
          </div>
        )
        }
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 pt-20 pb-44">
        {myList?.map((book) => (
          <Card
            key={book.ISBN}
            cover={book.cover}
            synopsis={book.synopsis}
            showSynopsis={false}
            showButton={true}
            title={book.title}
            pages={book.pages}
            genre={book.genre}
            year={book.year}
            ISBN={book.ISBN}
            author={book.author?.name}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default List;
