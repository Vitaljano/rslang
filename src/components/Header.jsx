import { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import Burger from './Burger';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authSlice } from '../store/reducers/AuthSlice';
import { userLogout } from '../services/authService';
import { setLangGroupNumber, setPage } from '../store/reducers/WordSlice';
import { APP_PAGES } from '../App';

const pageRoutes = {
  '/textbook': 'bg-green-900',
  '/sprint': 'bg-sprint',
  '/audiogame': 'bg-yellow',
};

function Header() {
  const { isAuth, user } = useSelector((state) => state.auth);
  const [openBurger, setOpenBurger] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const bgColor = pageRoutes[location.pathname] || 'bg-header';

  const onClickBurger = () => {
    setOpenBurger(true);
  };
  const onClickLink = () => {
    setOpenBurger(false);
  };
  const logOut = () => {
    dispatch(authSlice.actions.setIsAuth(false));
    dispatch(authSlice.actions.setUserData({}));
    dispatch(setLangGroupNumber(0));
    dispatch(setPage(0));
    userLogout();
  };

  openBurger
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  return (
    <header
      className={bgColor + ' z-50 max-w-1400px relative w-full h-20 text-white'}
    >
      <div className="container h-full items-center my-0 mx-auto w-11/12 flex justify-between gap-3 ">
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
              <p className="text-4xl font-semibold">Rslang</p>
            </div>
          </div>
        </Link>

        <div className="actions flex items-center flex-row">
          {isAuth ? (
            <div className=" flex justify-center items-center  gap-3 ">
              <Link to="/stat">
                <div className="w-10 h-10 mx-auto opacity-50">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    fill="white"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M256,31C131.7,31,31,131.7,31,256s100.7,225,225,225s225-100.7,225-225S380.3,31,256,31z M256,118.1
		c44.1,0,79.8,35.7,79.8,79.8s-35.7,79.8-79.8,79.8s-79.8-35.7-79.8-79.8S211.9,118.1,256,118.1z M256,430.2
		c-53.3,0-101-24.1-132.9-61.9c17.1-32.1,50.4-54.3,89.4-54.3c2.2,0,4.4,0.4,6.4,1c11.8,3.8,24.1,6.3,37.1,6.3s25.4-2.4,37.1-6.3
		c2.1-0.6,4.3-1,6.4-1c38.9,0,72.3,22.1,89.4,54.3C357,406.1,309.3,430.2,256,430.2z"
                      />
                    </g>
                  </svg>
                </div>
              </Link>
              <p className=" flex font-medium text-white text-xl  align-middle transition cursor-pointer duration-300 ease-in-out hover:text-action hover:border-none">
                {user.name}
              </p>
              <p
                onClick={logOut}
                className=" font-medium text-white text-center align-text-bottom text-xl   transition cursor-pointer duration-300 ease-in-out hover:text-action hover:border-none"
              >
                выход
              </p>
            </div>
          ) : (
            <NavLink to={APP_PAGES.login}>
              <button
                type="button"
                className="text-white   md:text-xl border-2 border-bg-white transition duration-300 ease-in-out font-medium rounded-lg  w-36 md:w-48 h-12 hover:bg-white hover:text-action hover:border-none "
              >
                Начать учиться
              </button>
            </NavLink>
          )}
          <div
            onClick={openBurger ? onClickLink : onClickBurger}
            className="burger ml-8 cursor-pointer "
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
