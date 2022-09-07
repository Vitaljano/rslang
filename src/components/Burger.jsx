import React from 'react';
import { Link } from 'react-router-dom';

function Burger({ onClickLink, bgColor }) {
  return (
    <>
      <div className={bgColor + ' w-full absolute h-60 md:h-full z-50 '}>
        <ul className="my-0 mx-auto flex items-center flex-col  md:flex-row text-3xl w-11/12 justify-between">
          <Link onClick={onClickLink} to="/textbook">
            <li className="mt-3 hover:opacity-80 transition-all">Учебник</li>
          </Link>
          <Link onClick={onClickLink} to="/sprint">
            <li className="mt-3 hover:opacity-80 transition-all">Спринт</li>
          </Link>
          <Link onClick={onClickLink} to="/audiogame">
            <li className="mt-3 hover:opacity-80 transition-all">Аудиовызов</li>
          </Link>
          <Link onClick={onClickLink} to="/stat">
            <li className={'mt-3 hover:opacity-80 transition-all'}>
              Статистика
            </li>
          </Link>
        </ul>
      </div>
      <div
        onClick={onClickLink}
        className="shadow z-10 bg-black opacity-70 w-full h-full fixed  top-1/12 left-0"
      ></div>
    </>
  );
}

export default Burger;
