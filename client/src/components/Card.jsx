/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const Card = ({ image, description, name, path }) => {
  return (
    <NavLink to={`/proyects/${path}`} className="block max-w-[600px] mx-auto">
      <div className="overflow-hidden aspect-video bg-transparent cursor-pointer rounded-md relative group">

        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/100 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
          <div className="transform-gpu p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
            <div className="font-bold">{name}</div>
            <div className=" text-sm">{description}</div>
          </div>
        </div>

        <img
          alt={`Imagen de ${name}`}
          className="object-cover aspect-auto group-hover:scale-110 transition duration-300 ease-in-out w-96 h-60"
          src={image}
        />
      </div>
    </NavLink>
  );
}

export default Card;
