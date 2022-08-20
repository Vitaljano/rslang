import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { APP_PAGES } from '../../App';

const AuthForm = () => {
  const location = useLocation();
  const isLogin = location.pathname === APP_PAGES.login;

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-violet-900 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white">
          {isLogin ? 'Вход' : 'Регистрация'}
        </h1>
        <form className="mt-4" onSubmit={null}>
          <div className="mb-4 ">
            <label className="block font-semibold text-white text-xl sm:text-xl">
              Имя пользователя
            </label>
            <input
              name="name"
              placeholder="Введите имя"
              type="text"
              className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40 "
            />
          </div>
          <div className="mb-4 ">
            <label className="block  text-xl sm:text-xl font-semibold  text-white t">
              Email
            </label>
            <input
              name="email"
              placeholder="Введите вашу почту"
              type="email"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-md border-white focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xl sm:text-xl font-semibold text-white">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              placeholder="Введите пароль"
              className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex  justify-between sm:flex-row-reverse flex-col">
            <div className="mt-6">
              <button
                onClick={() => null}
                className="w-full px-4 py-2 tracking-wide text-white  text-xl font-semibold transition-colors duration-200 transform bg-green-900 rounded-md hover:bg-green-200 focus:outline-none focus:bg-green-400"
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </button>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {isLogin ? (
                <div className="flex justify-center gap-3 font-medium text-white text-xl sm:text-xl">
                  Нет аккаунта?
                  <NavLink to={APP_PAGES.registration}>
                    <div className="hover:text-violet-700 text-white">
                      Зарегистрируйся!
                    </div>
                  </NavLink>
                </div>
              ) : (
                <div className="flex  justify-center gap-3  text-white text-xl sm:text-xl font-semibold">
                  Уже есть аккаунт?
                  <NavLink to={APP_PAGES.login}>
                    <div className="hover:text-violet-700 text-white text-l font-semibold">
                      ВОЙТИ!
                    </div>
                  </NavLink>
                </div>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
