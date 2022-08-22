import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import TextBook from './pages/Textbook';
import AuthPage from './pages/Auth';
import AudioGame from './pages/AudioGame';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNewUserTokens } from './utils/api/thunks';

import Footer from './components/Footer';
import {
  authSlice,
  setAuthUserName,
  setAuthUserId,
} from './store/reducers/AuthSlice';

import './App.css';

export const APP_PAGES = {
  main: '/',
  textBook: '/textbook',
  audiogame: '/audiogame',
  login: '/login',
  registration: '/registration',
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authSlice.actions.setIsAuth(true));
      dispatch(setAuthUserId(localStorage.getItem('userId')));
      dispatch(setAuthUserName(localStorage.getItem('name')));
      dispatch(getNewUserTokens(localStorage.getItem('userId')));
    }
  }, [localStorage.getItem('userId')]);
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path={APP_PAGES.main} />
        <Route element={<TextBook />} path={APP_PAGES.textBook} />
        <Route element={<AudioGame />} path={APP_PAGES.audiogame} />
        <Route element={<AuthPage />} path={APP_PAGES.login} />
        <Route element={<AuthPage />} path={APP_PAGES.registration} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
