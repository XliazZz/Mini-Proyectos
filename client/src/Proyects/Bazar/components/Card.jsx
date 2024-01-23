/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Card = ({ title, description, price, image, rating, id }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <NavLink to={`/bazar/detail/${id}`} className="flex rounded-sm bg-zinc-950 content-center justify-center w-screen h-44 p-3 max-h-44 sm:w-96 sm:rounded-lg">

      <div className="flex items-center">
        <img className=" h-20 w-20 rounded-full ml-0 mx-3 sm:rounded-sm sm:w-40 sm:h-24" src={image} alt={`Imagen de ${title}`} />
      </div>

      <div className="flex flex-col h-40 pl-2 min-h-40 mx-auto">
        <h2 className="text-white mb-3 w-52 overflow-hidden overflow-ellipsis line-clamp-1 font-extrabold">{title}</h2>

        <div className="flex-grow mx-auto">
          <p className="text-gray-400 w-60 max-h-32 overflow-hidden overflow-ellipsis line-clamp-3">{description}</p>
        </div>

        <div className="flex mb-3 items-end">
          <p className="text-green-600 font-extrabold">${price}</p>
          <div className="ml-20">
            <div className="flex cursor-default">
              {Array(fullStars).fill().map((_, i) => (
                <div key={i} className="text-2xl mr-1 text-yellow-400">★</div>
              ))}
              {halfStar && <div className="text-2xl mr-1 text-yellow-400">★</div>}
              {Array(emptyStars).fill().map((_, i) => (
                <div key={i} className="text-2xl mr-1 text-gray-400">★</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;