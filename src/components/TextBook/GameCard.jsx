import React from 'react';
import { NavLink } from 'react-router-dom';

const GameCard = ({ link, name, description, img }) => {
  return (
    <NavLink to={link}>
      <div className="max-w-md mb-10 mx-auto bg-white rounded-xl  transition duration-300 ease-in-out shadow-md overflow-hidden md:max-w-l hover:text-action hover:shadow-2xl hover:bg-opacity-90">
        <div className="flex">
          <h2 className="mt-2 text-2xl p-8">{name}</h2>
        </div>

        <img
          className="h-48 w-full object-cover   rounded-lg "
          src={img}
          alt={name}
        ></img>

        <p className="mt-2 text-slate-500 p-8">{description}</p>
      </div>
    </NavLink>
  );
};

export default GameCard;
