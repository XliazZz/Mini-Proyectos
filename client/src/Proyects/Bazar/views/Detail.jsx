import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchById } from "../../../redux/Bazar/bazarSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Modal from "./Modal";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state?.bazar.productDetails);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [dispatch, id]);

  const fullStars = Math.floor(productDetails.rating);
  const halfStar = productDetails.rating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));
  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="justify-center">

      <div className="my-1 sm:my-10 sm:mt-3">
        <SearchBar />
      </div>

        <div className="sm:grid sm:grid-cols-2">
          <div className="flex items-center sm:justify-start justify-center sm:ml-32 mt-8">
            <img
              className="cursor-pointer h-56 w-56 rounded-full ml-0 mx-3 hover:opacity-75 sm:h-96 sm:w-96 sm:rounded-md"
              src={productDetails.thumbnail}
              alt={`Imagen de ${productDetails.title}`}
              onClick={handleShowModal}
            />

            <div className="flex flex-col ml-10 justify-end content-end">
              {productDetails?.images?.slice(0,3).map((image) => (
                <img onClick={handleShowModal} key={image} src={image} alt={`Imagen de ${productDetails.name}`} className="rounded-full h-16 w-16 mt-3 cursor-pointer hover:opacity-75 sm:rounded-md sm:my-4 sm:w-20 sm:h-20"/>
              ))
              }
            </div>
          </div>

          <div className="text-center justify-center content-center mt-10">
            <h2 className="text-white mb-3  overflow-hidden overflow-ellipsis line-clamp-1 font-extrabold text-xl sm:text-4xl">{productDetails.title} - <span className="font-light">{productDetails.brand}</span></h2>

              <div className="grid grid-cols-2 grid-rows-2 sm:mt-16">
                <strong className="text-green-500 m-0 p-0 sm:text-2xl" >${productDetails.price}</strong>
                <p className="font-normal text-gray-400 text-xs m-0 col-start-1 sm:text-lg">{productDetails.stock} disponibles</p>

                <div className="flex cursor-default col-start-2 row-start-1">
                  {Array(fullStars > 0 ? fullStars : 0).fill().map((_, i) => (
                    <div key={i} className="text-2xl sm:text-4xl mr-1 text-yellow-400">★</div>
                  ))}
                  {halfStar && <div className="text-2xl sm:text-4xl mr-1 text-yellow-400">★</div>}
                  {Array(emptyStars > 0 ? emptyStars : 0).fill().map((_, i) => (
                    <div key={i} className="text-2xl mr-1 text-gray-400">★</div>
                  ))}
                </div>
              </div>
            <div className="mt-5 sm:col-start-2 sm:mt-10">
              <p className="text-lg mx-11 sm:text-xl">{productDetails.description}</p>
            </div>
          </div>

          <div className="justify-center content-center text-center mt-14 sm:mt-0 sm:col-start-2">
            <button className="text-xl bg-zinc-950 hover:bg-slate-950 p-3 w-60 rounded-xl">Comprar</button>
          </div>
        </div>

      {showModal && 
        <Modal 
          handleShowModal={handleShowModal} 
          images={productDetails.images}
          onClose={handleShowModal}
        />
      }
    </div>
  );
};

export default Detail;