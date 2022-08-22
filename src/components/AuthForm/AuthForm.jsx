import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { APP_PAGES } from '../../App';
import { useForm } from 'react-hook-form';
import { registration, login } from '../../utils/api/thunks';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useNavigate();
  const isLogin = location.pathname === APP_PAGES.login;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });

  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    try {
      if (isLogin) {
        dispatch(login(data));
      } else {
        dispatch(registration(data));
      }
      history(APP_PAGES.main);
    } catch (e) {
      console.log(e);
    } finally {
      // dispatch(getNewUserTokens(user.userId));
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-violet-900 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-white">
          {isLogin ? 'Вход' : 'Регистрация'}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {isLogin ? (
            <>
              <div className="mb-4 ">
                <label className="block  text-xl sm:text-xl font-semibold  text-white t">
                  Email
                </label>
                <input
                  {...register('email', { required: true })}
                  placeholder="Введите вашу почту"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md border-white focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="text-sm text-red">
                {errors.email && <p>Поле обязательно к заполнению</p>}
              </div>

              <div className="mb-2">
                <label className="block text-xl sm:text-xl font-semibold text-white">
                  Пароль
                </label>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="text-sm text-red mt-2">
                  {errors.password && <p>Поле обязательно к заполнению</p>}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 ">
                <label className="block font-semibold text-white text-xl sm:text-xl">
                  Имя пользователя
                </label>
                <input
                  {...register('name', { required: true })}
                  name="name"
                  placeholder="Введите имя"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                />
                <div className="text-sm text-red mt-2">
                  {errors.name && <p>Поле обязательно к заполнению</p>}
                </div>
              </div>
              <div className="mb-4 ">
                <label className="block  text-xl sm:text-xl font-semibold  text-white t">
                  Email
                </label>
                <input
                  {...register('email', { required: true })}
                  name="email"
                  placeholder="Введите вашу почту"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md border-white focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="text-sm text-red mt-2">
                  {errors.email && <p>Поле обязательно к заполнению</p>}
                </div>
              </div>
              <div className="mb-2">
                <label className="block text-xl sm:text-xl font-semibold text-white">
                  Пароль
                </label>
                <input
                  {...register('password', { required: true })}
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="text-sm text-red mt-2">
                  {errors.password && <p>Поле обязательно к заполнению</p>}
                </div>
              </div>
            </>
          )}

          <div className="flex  justify-between sm:flex-row-reverse flex-col">
            <div className="mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white  text-xl font-semibold transition-colors duration-200 transform bg-green-900 rounded-md hover:bg-green-200 focus:outline-none focus:bg-green-400"
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </button>
            </div>
            <div className="mt-8 text-xs font-light text-center text-gray-700">
              {isLogin ? (
                <div className="flex justify-center gap-3 font-semibold text-white text-xl sm:text-xl">
                  Нет аккаунта?
                  <NavLink to={APP_PAGES.registration}>
                    <div className="hover:text-violet-700 text-white text-l font-semibold">
                      Зарегистрируйся!
                    </div>
                  </NavLink>
                </div>
              ) : (
                <div className="flex  justify-center gap-3  text-white text-xl sm:text-xl font-semibold">
                  Уже есть аккаунт?
                  <NavLink to={APP_PAGES.login}>
                    <div className="hover:text-violet-700 text-white text-l font-semibold">
                      Войти
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
