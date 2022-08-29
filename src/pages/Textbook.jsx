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
  const { difficultWords, learnedWords } = useSelector(
    (state) => state.agregatingWords
  );

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
      } else {
        dispatch(
          getAllUserAgregatedWords({
            userId: user.userId,
            group: 0,
            page: 0,
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
    if (langLevel == 7) {
      await dispatch(
        getDifficultWords({
          userId: user.userId,
          difficulty: 'hard',
          isLearned: false,
        })
      );
      dispatch(setLangGroupNumber(langLevel));
      dispatch(setPage(0));
    }
    if (langLevel == 8) {
      await dispatch(
        getLearnedWords({
          userId: user.userId,
          difficulty: 'studied',
          isLearned: true,
        })
      );
      dispatch(setLangGroupNumber(langLevel));
      dispatch(setPage(0));
    } else {
      dispatch(setLangGroupNumber(langLevel));
      dispatch(setPage(0));
    }
  };

  return (
    <>
      <Header />
      <section className="bg-green-900 pt-10 flef flex-col gap-8">
        <Levels handleClick={changeLevel} activeLevel={langGroupNumber} />
        {langGroupNumber === 7 && (
          <WordsList
            currentWords={
              difficultWords.paginatedResults && difficultWords.paginatedResults
            }
          />
        )}
        {langGroupNumber === 8 && (
          <WordsList
            currentWords={
              learnedWords.paginatedResults && learnedWords.paginatedResults
            }
          />
        )}
        (
        <>
          <WordsList
            currentWords={
              isAuth && allUserWords.paginatedResults
                ? allUserWords.paginatedResults
                : currentWords
            }
          />
          <div className="container mx-auto px-4 flex mt-8 justify-center ">
            <Pagination
              itemsPerPage={itemsPerPage}
              pageCount={30}
              // items={currentWords}
            />
          </div>
        </>
        )
      </section>
    </>
  );
};

export default TextBook;
