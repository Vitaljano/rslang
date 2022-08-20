import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import TextBook from './pages/textbook';

import './App.css';

const APP_PAGES = {
  main: '/',
  textBook: '/textbook',
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path={APP_PAGES.main} />
        <Route element={<TextBook />} path={APP_PAGES.textBook} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
