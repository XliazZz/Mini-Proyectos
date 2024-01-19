import { useDispatch, useSelector } from "react-redux";
import { selectedGenre } from "../../../redux/Library/librarySlice";
import books from "../utils/books.json";
import { useState, useEffect, useRef } from "react";

const FIlter = () => {
  const [showOptions, setShowOptions] = useState(false);

  const dispatch = useDispatch();

  const selectedGenres = useSelector((state) => state?.library.selectedGenres || []);

  const genres = new Set(books.library.map((book) => book.book.genre))
  const uniqueGenres = [...new Set(genres)];

  const handleGenre = (event) => {
    const genre = event.target.value;

    dispatch(selectedGenre(genre));
    setShowOptions(false);
  }

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  }

  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={filterRef} className="w-full md:w-full flex flex-col items-start h-20 mx-auto">
      <div className="w-full px-0">
        <div className="flex flex-col items-start relative">

          <div className="w-full">
            <div className="my-2 p-1 flex border border-blue-200 bg-gray-900  rounded svelte-1l8159u">
              <div className="flex flex-auto flex-wrap">

                {/* Seleccionados */}
                {selectedGenres?.map((genre) => (
                  <div key={genre} className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-sm text-blue-700 bg-blue-100 border border-blue-300">
                    <div className="text-xs font-normal leading-none max-w-full flex-initial">{genre}</div>
                  </div>
                ))}

                <div onClick={handleShowOptions} className="flex-1">
                  <input  placeholder={selectedGenres && selectedGenres.length ? '' : "Seleccionar Genero" } className={selectedGenres && selectedGenres.length ? 
                    'bg-transparent placeholder-white p-1 px-2 appearance-none outline-none h-full w-full text-gray-800 cursor-pointer caret-transparent' 
                      : 
                    "bg-transparent p-1 px-2 placeholder-white appearance-none outline-none h-full  w-full text-gray-800 cursor-default caret-transparent"}
                  />
                </div>
              </div>

              <div onClick={handleShowOptions} className="cursor-pointer text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                <button className=" w-6 h-6 text-gray-600 outline-none focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4  text-white">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Options */}
          {showOptions && (
            <div className="absolute shadow top-100 mt-14 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
              <div className="flex flex-col w-full">
                {uniqueGenres.map((genre) => (
                  <label key={genre} className="cursor-pointer w-full border-blue-200 bg-gray-900 text-white hover:text-black rounded-t border border-t-0 hover:bg-blue-100">
                    <input
                      type="checkbox"
                      value={genre}
                      checked={selectedGenres?.includes(genre)}
                      onChange={handleGenre}
                      className="hidden"
                    />
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-100">
                      <div className="w-full items-center flex">
                        <div className="mx-2 leading-6">{genre}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default FIlter;