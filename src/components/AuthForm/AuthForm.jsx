import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { APP_PAGES } from '../../App';
import { useForm } from 'react-hook-form';
import { registration, login } from '../../utils/api/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AuthForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useNavigate();
  const isLogin = location.pathname === APP_PAGES.login;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    if (isLogin) {
      const result = await dispatch(login(data));
      if (result.meta.requestStatus === 'fulfilled') {
        history(APP_PAGES.main);
      } else {
        toast.error('Неверный логин или пароль!');
        reset();
      }
    } else {
      const result = await dispatch(registration(data));
      if (result.meta.requestStatus === 'fulfilled') {
        toast.success('Регистрация прошла успешно!');
        history(APP_PAGES.login);
      } else {
        toast.error('Не удалось создать нового пользователя!');
        reset();
      }
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-violet-900 rounded-md shadow-2xl  lg:max-w-xl">
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
                  {...register('email', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 4,
                      message: 'Длина почты должна быть от 4 до 32 символов',
                    },
                    maxLength: {
                      value: 32,
                      message: 'Длина почты должна быть от 4 до 32 символов',
                    },
                    pattern: {
                      value:
                        /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                      message: 'Некорректная почта',
                    },
                  })}
                  placeholder="Введите вашу почту"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md border-white focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="text-sm text-red">
                {errors?.email && <p>{errors?.email?.message || 'Error: '}</p>}
              </div>

              <div className="mb-2">
                <label className="block text-xl sm:text-xl font-semibold text-white">
                  Пароль
                </label>
                <input
                  {...register('password', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 8,
                      message: 'Длина должна быть от 8 до 16 символов',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Длина должна быть от 8 до 16 символов',
                    },
                  })}
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="text-sm text-red mt-2">
                  {errors.password && (
                    <p>{errors?.password?.message || 'Error: '}</p>
                  )}
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
                  {...register('name', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 2,
                      message: 'Длина имени должна быть от 2 до 16 символов',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Длина имени должна быть от 2 до 16 символов',
                    },
                    pattern: {
                      value: /^[а-яёa-z]+$/iu,
                      message:
                        'Имя должно состоять из букв кирриллицы или латинского алфавита, содержать только буквенные символы',
                    },
                  })}
                  name="name"
                  placeholder="Введите имя"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                />
                <div className="text-sm text-red mt-2">
                  {errors?.name && <p>{errors?.name?.message || 'Error: '}</p>}
                </div>
              </div>
              <div className="mb-4 ">
                <label className="block  text-xl sm:text-xl font-semibold  text-white t">
                  Email
                </label>
                <input
                  {...register('email', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 4,
                      message: 'Длина почты должна быть от от 2 до 32 символов',
                    },
                    maxLength: {
                      value: 32,
                      message: 'Длина почты должна быть от 2 до 32 символов',
                    },
                    pattern: {
                      value:
                        /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                      message: 'Некорректная почта',
                    },
                  })}
                  placeholder="Введите вашу почту"
                  type="text"
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md border-white focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="text-sm text-red">
                {errors?.email && <p>{errors?.email?.message || 'Error: '}</p>}
              </div>
              <div className="mb-2">
                <label className="block text-xl sm:text-xl font-semibold text-white">
                  Пароль
                </label>
                <input
                  {...register('password', {
                    required: 'Поле обязательно к заполнению',
                    minLength: {
                      value: 8,
                      message: 'Длина должна быть от 8 до 16 символов',
                    },
                    maxLength: {
                      value: 16,
                      message: 'Длина должна быть от 8 до 16 символов',
                    },
                  })}
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  className="block w-full px-4 py-2 mt-2  bg-white border-white rounded-md focus:border-green-600 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="text-sm text-red mt-2">
                  {errors.password && (
                    <p>{errors?.password?.message || 'Error: '}</p>
                  )}
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AuthForm;
