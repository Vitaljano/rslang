import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burger from './Burger';
import { useSelector } from 'react-redux';

const pageRoutes = {
  '/textbook': 'bg-green-900',
};

function Header() {
  const { isAuth } = useSelector((state) => state.auth);
  const [openBurger, setOpenBurger] = useState(false);
  const location = useLocation();
  const bgColor = pageRoutes[location.pathname] || 'bg-header';

  const onClickBurger = () => {
    setOpenBurger(true);
  };
  const onClickLink = () => {
    setOpenBurger(false);
  };

  openBurger
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  return (
    <header
      className={bgColor + ' z-50 max-w-1400px relative w-full h-20 text-white'}
    >
      <div className="container h-full items-center my-0 mx-auto w-11/12 flex justify-between ">
        <Link onClick={onClickLink} to="/">
          <div className="logo flex flex-row items-center">
            <div className="logo-img">
              <svg
                id="Layer_1"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <path
                  fill="#ffff"
                  d="m24 8.48v11.52a1 1 0 0 1 -2 0v-8.248l-7.4 3.536a5 5 0 0 1 -2.577.694 5.272 5.272 0 0 1 -2.7-.739l-7.38-3.513a3.691 3.691 0 0 1 -.084-6.455c.027-.016.056-.031.084-.045l7.457-3.558a5.226 5.226 0 0 1 5.282.045l7.375 3.513a3.767 3.767 0 0 1 1.943 3.25zm-11.978 9.5a7.26 7.26 0 0 1 -3.645-.972l-4.377-2.089v2.7a5.007 5.007 0 0 0 3.519 4.778 15.557 15.557 0 0 0 4.481.603 15.557 15.557 0 0 0 4.481-.607 5.007 5.007 0 0 0 3.519-4.778v-2.691l-4.459 2.13a6.983 6.983 0 0 1 -3.519.928z"
                />
              </svg>
            </div>
            <div className="logo-caption ml-3">
              <p className="text-4xl font-semibold">
                {isAuth ? 'RSLang-auth' : 'Rslang'}
              </p>
            </div>
          </div>
        </Link>
        <div className="actions flex items-center flex-row">
          <button
            type="button"
            className="text-white text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg w-48 h-12 hover:bg-white hover:text-action hover:border-none  ml-4"
          >
            Начать учиться
          </button>
          <div
            onClick={openBurger ? onClickLink : onClickBurger}
            className="burger ml-8 cursor-pointer"
          >
            <svg
              className={openBurger ? 'rotate-90' : ''}
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              width="30"
              height="30"
              fill="#ffff"
            >
              <g>
                <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {openBurger && <Burger onClickLink={onClickLink} bgColor={bgColor} />}
    </header>
  );
}

export default Header;
