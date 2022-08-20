import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import TextBook from './pages/textbook';
import AuthPage from './pages/Auth';

import './App.css';

export const APP_PAGES = {
  main: '/',
  textBook: '/textbook',
  login: '/login',
  registration: '/registration',
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path={APP_PAGES.main} />
        <Route element={<TextBook />} path={APP_PAGES.textBook} />
        <Route element={<AuthPage />} path={APP_PAGES.login} />
        <Route element={<AuthPage />} path={APP_PAGES.registration} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
