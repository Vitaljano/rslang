import Header from '../components/Header';
import Levels from '../components/TextBook/Levels';
import WordsList from '../components/TextBook/WordsList';
import { setLangGroupNumber, setPage } from '../store/reducers/WordSlice';
import {
  getGroupWords,
  getWordByID,
  saveUserWord,
  deleteUserWordsBIyd,
  // getUserWordsBId,
} from '../utils/api/thunks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { useDispatch } from 'react-redux';
// import axios from 'axios';

export const TextBook = () => {
  console.log('render');
  const dispatch = useDispatch();
  const { langGroupNumber, bookPage, currentWords, itemsPerPage, activeWord } =
    useSelector((state) => state.words);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      getGroupWords({
        group: Number(localStorage.getItem('langGroupNumber') || 0),
        page: Number(localStorage.getItem('bookPage')),
      })
    );
  }, [langGroupNumber, bookPage]);

  useEffect(() => {
    if (localStorage.getItem('activeWordId')) {
      dispatch(getWordByID(localStorage.getItem('activeWordId')));
    } else {
      dispatch(getWordByID('5e9f5ee35eb9e72bc21af4a0'));
    }
  }, []);

  const changeLevel = (langLevel) => {
    dispatch(setLangGroupNumber(langLevel));
    dispatch(setPage(0));
    localStorage.setItem('langGroupNumber', langLevel);
  };
  const changeWoard = (wordId) => {
    dispatch(getWordByID(wordId));
    // dispatch(setPage(0));
    localStorage.setItem('activeWordId', wordId);
  };
  const addtoSavedWords = (wordId) => {
    localStorage.setItem('activeWordId', wordId);
    dispatch(
      saveUserWord({
        userId: user.userId,
        wordId: activeWord.id,
      })
    );
    console.log(activeWord.id);
  };

  const delSavedWord = (wordId) => {
    dispatch(
      deleteUserWordsBIyd({
        userId: user.userId,
        wordId: activeWord.id,
      })
    );
    console.log(typeof wordId);
  };

  return (
    <>
      <Header />
      <section className="bg-green-900 pt-10 flef flex-col gap-8">
        <Levels handleClick={changeLevel} />
        <WordsList
          currentWords={currentWords}
          cardData={activeWord}
          hahdleClick={changeWoard}
          delHandleClick={delSavedWord}
          addHandleClick={addtoSavedWords}
        />
        <div className="container mx-auto px-4 flex mt-8 justify-center ">
          <Pagination itemsPerPage={itemsPerPage} pageCount={currentWords} />
        </div>
      </section>
    </>
  );
};
export default TextBook;
