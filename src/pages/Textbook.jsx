import Header from '../components/Header';
import Levels from '../components/TextBook/Levels';
import WordsList from '../components/TextBook/WordsList';
import GamesList from '../components/TextBook/GamesList';
import Footer from '../components/Footer';

import { setLangGroupNumber, setPage } from '../store/reducers/WordSlice';
import { setAgregatedPageCount } from '../store/reducers/AgregatedWordsSlice';
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
  const dispatch = useDispatch();
  const { langGroupNumber, bookPage, currentWords, itemsPerPage } = useSelector(
    (state) => state.words
  );
  const { user, isAuth } = useSelector((state) => state.auth);
  const { allUserWords } = useSelector((state) => state.userWords);
  const { difficultWords, learnedWords, pageCount } = useSelector(
    (state) => state.agregatingWords
  );

  useEffect(() => {
    if (isAuth) {
      if (localStorage.getItem('langGroupNumber')) {
        dispatch(
          getAllUserAgregatedWords({
            userId: user.userId,
            group: langGroupNumber,
            page: bookPage,
          })
        );
        dispatch(
          getDifficultWords({
            userId: user.userId,
            difficulty: 'hard',
            isLearned: false,
            page: bookPage,
          })
        );

        dispatch(
          getLearnedWords({
            userId: user.userId,
            difficulty: 'studied',
            isLearned: true,
            page: bookPage,
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
          group: langGroupNumber,
          page: bookPage,
        })
      );
    }
  }, [
    isAuth,
    langGroupNumber,
    bookPage,
    getDifficultWords,
    getAllUserAgregatedWords,
  ]);

  useEffect(() => {
    localStorage.setItem('bookPage', String(bookPage));
    localStorage.setItem('langGroupNumber', String(langGroupNumber));
  }, [bookPage, langGroupNumber]);

  const changeLevel = async (langLevel) => {
    dispatch(setLangGroupNumber(langLevel));
    dispatch(setPage(0));
    if (langLevel == 6) {
      await dispatch(
        setAgregatedPageCount(
          Math.ceil((difficultWords.totalCount[0]?.count || 0) / itemsPerPage)
        )
      );
    }
    if (langLevel == 7) {
      await dispatch(
        setAgregatedPageCount(
          Math.ceil((learnedWords.totalCount[0]?.count || 0) / itemsPerPage)
        )
      );
    }
  };

  return (
    <>
      <Header />
      <section className="bg-green-900 pt-10 flef flex-col gap-8">
        <Levels handleClick={changeLevel} activeLevel={langGroupNumber} />

        {langGroupNumber === 6 && (
          <>
            <WordsList
              currentWords={
                difficultWords.paginatedResults &&
                difficultWords.paginatedResults
              }
            />
            <div className="container mx-auto px-4 flex mt-8 justify-center ">
              <Pagination itemsPerPage={itemsPerPage} pageCount={pageCount} />
            </div>

            <GamesList
              currentWords={
                difficultWords.paginatedResults &&
                difficultWords.paginatedResults
              }
            />
          </>
        )}
        {langGroupNumber === 7 ? (
          <>
            <WordsList
              currentWords={
                learnedWords.paginatedResults && learnedWords.paginatedResults
              }
            />
            <div className="container mx-auto px-4 flex mt-8 justify-center ">
              <Pagination
                itemsPerPage={itemsPerPage}
                pageCount={pageCount}
                itemsCount={600}
              />
            </div>

            <GamesList currentWords={[]} />
          </>
        ) : (
          <>
            {langGroupNumber !== 6 && (
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
                    itemsCount={600}
                  />
                </div>
                <GamesList
                  currentWords={
                    isAuth && allUserWords.paginatedResults
                      ? allUserWords.paginatedResults
                      : currentWords
                  }
                />
              </>
            )}
          </>
        )}
      </section>
      <Footer className="bg-green-600" />
    </>
  );
};

export default TextBook;
