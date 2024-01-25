import { useState } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ images }) => {
  
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="relative content-center h-full justify-center flex flex-col items-center"
      data-te-carousel-init
      data-te-ride="carousel">

      {/* <!--Carousel indicators--> */}
      <div
        className="absolute bottom-0 sm:top-[515px] left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {images.map((_,index) => (
          <button
            key={index}
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="0"
            data-te-carousel-active
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === currentImage ? 'bg-white': 'bg-gray-500'}`}
            aria-current={index === currentImage}
            aria-label={`Slide ${index + 1}`}></button>
        ))
        }
      </div>
    
      {/* <!--Carousel items--> */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`sm:h-[450px] relative float-left -mr-[100%] w-full h-52 transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            data-te-carousel-item
            data-te-carousel-active
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
          >
            <motion.img
              src={img}
              className="block w-screen h-full rounded-lg p-0"
              alt="Imagenes del proyecto"
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ))}
      </div>
    
      {/* <!--Carousel controls - prev item--> */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:bg-gray-500 hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        data-te-slide="prev"
        onClick={prevImage}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Previous</span
        >
      </button>
      {/* <!--Carousel controls - next item--> */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:bg-gray-500 hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleIndicators"
        data-te-slide="next"
        onClick={nextImage}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Next</span
        >
      </button>
    </div>
  )
}

export default Carousel;