import { useEffect, useRef } from 'react';
import Carousel from "../components/Carousel";

const Modal = ({ images, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center sm:p-20 z-20 bg-black bg-opacity-90 duration-300 overflow-y-auto"
    >
      <div  ref={modalRef} className="relative sm:w-3/4 md:w-1/2 lg:w-4/5 mx-2 sm:mx-auto my-10 opacity-100">
        <div className="relative bg-gray-800 dark:bg-gray-800 shadow-lg rounded-md text-white z-20"  style={{ overflowY: 'auto', maxHeight: '90vh' }}>

          <header className="flex items-center justify-center p-1">
            <button 
              className="focus:outline-none p-1 fixed right-1 mt-10 sm:mt-[55px] sm:mr-[70px] md:top-11 md:right-36 rounded-full  m-2 text-white hover:text-gray-300" 
              onClick={onClose}
            >
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </header>

          <div className="p-7 sm:p-9 sm:h-[600px]">
            <Carousel images={images}/>
          </div>
          
        </div>
    </div>
  </div>
  )
}

export default Modal