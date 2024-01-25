import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchSearchs } from '../../../redux/Bazar/bazarSlice';

const SearchBar = ({ name }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const handleClick = () => {
    if (searchTerm) {
      dispatch(fetchSearchs(searchTerm));
      setSearchTerm('');
      localStorage.setItem('searchTerm', searchTerm);
      navigate('/proyects/bazar/searchs')
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className='max-w-md mx-auto w-screen p-3'>
      <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        
        <input
          className="peer h-full w-full outline-none text-lg text-gray-700 pl-3 border-none bg-transparent transition-all duration placeholder-gray-400"
          type="text" 
          placeholder={name ? name : 'Buscar...'}
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />

        <div onClick={handleClick} className="grid place-items-center h-full w-12 text-gray-950 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full bg-white p-2 border-l-2" fill="none" viewBox="0 0 24 24" stroke="#000">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default SearchBar;