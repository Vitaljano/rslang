import React from 'react';

const LevelCard = ({
  name,
  levelAbrr,
  handleClick,
  langLevel,
  activeLevel,
}) => {
  return (
    <button
      onClick={() => handleClick(langLevel)}
      type="button"
      className={
        activeLevel === langLevel
          ? ' bg-red flex items-center justify-between px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-5/12 h-10 md: h-12 hover:bg-white hover:text-action hover:border-none  ml-4'
          : 'flex items-center justify-between px-3 text-white  text-center text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-5/12 h-10 md: h-12 hover:bg-white hover:text-action hover:border-none  ml-4'
      }
    >
      <h2>{name}</h2>
      <p>{levelAbrr}</p>
    </button>
  );
};

export default LevelCard;
