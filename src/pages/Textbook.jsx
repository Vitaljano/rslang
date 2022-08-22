import Header from '../components/Header';
import Levels from '../components/TextBook/Levels';
import WordsList from '../components/TextBook/WordsList';
import { setLangGroupNumber, setPage } from '../store/reducers/WordSlice';
import { getGroupWords, getWordByID } from '../utils/api/thunks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { useDispatch } from 'react-redux';

export const TextBook = () => {
  const dispatch = useDispatch();
  const { langGroupNumber, bookPage, currentWords, itemsPerPage, activeWord } =
    useSelector((state) => state.words);

  useEffect(() => {
    dispatch(
      setLangGroupNumber(Number(localStorage.getItem('langGroupNumber')) || 0)
    );
  }, [setLangGroupNumber]);

  useEffect(() => {
    dispatch(setPage(Number(localStorage.getItem('bookPage')) || 0));
  }, [setPage]);

  useEffect(() => {
    dispatch(
      getGroupWords(
        Number(localStorage.getItem('langGroupNumber')),
        Number(localStorage.getItem('bookPage') || 0)
      )
    );
  }, [langGroupNumber, bookPage]);

  useEffect(() => {
    dispatch(getWordByID(localStorage.getItem('activeWordId')) || 0);
  }, []);

  const changeLevel = (langLevel) => {
    if (langLevel === null) return;
    dispatch(setLangGroupNumber(langLevel));
    dispatch(setPage(0));

    localStorage.setItem('langGroupNumber', langLevel);
  };
  const changeWoard = (wordId) => {
    if (wordId === null) return;
    dispatch(getWordByID(wordId));
    dispatch(setPage(0));
    localStorage.setItem('activeWordId', wordId);
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
        />
        <div className="container mx-auto px-4 flex justify-center ">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </section>
    </>
  );
};
export default TextBook;
