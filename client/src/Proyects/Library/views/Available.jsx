import Card from "../components/Card";
import books from "../utils/books.json";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Filter from "../components/FIlter";

const Available = () => {
  let quantity = books.library.length;

  const quantityList = useSelector((state) => state?.library.myList?.length);

  const selectedGenres = useSelector((state) => state?.library.selectedGenres);

  const filteredBooks = books.library.filter((book) => {
    if (!selectedGenres || selectedGenres.length === 0) {
      return true;
    } else {
      return selectedGenres?.some((selectedGenre) => book.book.genre === selectedGenre);    
    }
  })

  if (filteredBooks.length >= 0) {
    quantity = filteredBooks.length;
  }

  let showQuantityList 

  const myListFromLocalStorage = JSON.parse(localStorage.getItem('myList')) || [];
  
  if (myListFromLocalStorage.length !== 0) {
    showQuantityList = myListFromLocalStorage.length;
  } else {
    showQuantityList = quantityList;
  }


  return (
    <div>
      <section className="flex">
        <div className="w-full justify-start mr-5 content-start items-start p-10">
          <Filter />
        </div>
      </section>

      <motion.div 
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-50 mb-5">Hay <span className="text-blue-300">{quantity}</span> libros disponibles</h1>
        {showQuantityList > 0 && (
          <motion.h2 
            className="text-2xl font-bold text-gray-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.3 }}
          >Hay <span className="text-green-200">{showQuantityList}</span> libros en tu lista</motion.h2>
        )
        }
      </motion.div>   

      <motion.div 
        className="grid grid-cols-4  gap-y-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.3 }}

      >   
        {filteredBooks.map((book) => (
          <Card
            key={book.book.ISBN}
            cover={book.book.cover}
            synopsis={book.book.synopsis}
            title={book.book.title}
            pages={book.book.pages}
            genre={book.book.genre}
            year={book.book.year}
            ISBN={book.book.ISBN}
            author={book.book.author.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Available;