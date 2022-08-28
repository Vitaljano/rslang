import Header from '../components/Header';
import Levels from '../components/TextBook/Levels';
import WordsList from '../components/TextBook/WordsList';
import { setLangGroupNumber, setPage } from '../store/reducers/WordSlice';
import {
  getGroupWords,
  getAllUserAgregatedWords,
  getDifficultWords,
  getLearnedWords,
} from '../utils/api/thunks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { useDispatch } from 'react-redux';

export const TextBook = () => {
  console.log('render');
  const dispatch = useDispatch();
  const { langGroupNumber, bookPage, currentWords, itemsPerPage } = useSelector(
    (state) => state.words
  );
  const { user, isAuth } = useSelector((state) => state.auth);
  const { allUserWords } = useSelector((state) => state.userWords);
  const { difficultWords } = useSelector((state) => state.agregatingWords);

  useEffect(() => {
    if (isAuth) {
      if (localStorage.getItem('langGroupNumber')) {
        dispatch(
          getAllUserAgregatedWords({
            userId: user.userId,
            group: Number(localStorage.getItem('langGroupNumber')),
            page: Number(localStorage.getItem('bookPage')),
          })
        );
        dispatch(
          getDifficultWords({
            userId: user.userId,
            difficulty: 'hard',
            isLearned: false,
          })
        );
        dispatch(
          getLearnedWords({
            userId: user.userId,
            difficulty: 'easy',
            isLearned: true,
          })
        );
        // console.log(difficultWords && difficultWords.paginatedResults);
      } else {
        dispatch(
          getAllUserAgregatedWords({
            userId: user.userId,
            group: Number(localStorage.getItem('langGroupNumber')),
            page: Number(localStorage.getItem('bookPage')),
          })
        );
      }
    } else {
      dispatch(
        getGroupWords({
          group: Number(localStorage.getItem('langGroupNumber') || 0),
          page: Number(localStorage.getItem('bookPage') || 0),
        })
      );
    }
  }, [isAuth, langGroupNumber, bookPage, getAllUserAgregatedWords]);

  useEffect(() => {
    localStorage.setItem('bookPage', String(bookPage));
    localStorage.setItem('langGroupNumber', String(langGroupNumber));
  }, [bookPage, langGroupNumber]);

  const changeLevel = async (langLevel) => {
    localStorage.setItem('langGroupNumber', langLevel);
    dispatch(setLangGroupNumber(langLevel));
    dispatch(setPage(0));
  };

  return (
    <>
      <Header />
      <section className="bg-green-900 pt-10 flef flex-col gap-8">
        <Levels handleClick={changeLevel} activeLevel={langGroupNumber} />
        <WordsList
          currentWords={
            isAuth && allUserWords.paginatedResults
              ? allUserWords.paginatedResults
              : currentWords
          }
          difficultWords={difficultWords && difficultWords.paginatedResults}
        />
        <div className="container mx-auto px-4 flex mt-8 justify-center ">
          <Pagination itemsPerPage={itemsPerPage} pageCount={30} />
        </div>
      </section>
    </>
  );
};

export default TextBook;
