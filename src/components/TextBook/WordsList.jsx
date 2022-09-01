import React from 'react';
import WordCard from './WordCard';
import Card from '../Card';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveUserWord,
  getAllUserAgregatedWords,
  updateUserWordsById,
  getDifficultWords,
  getLearnedWords,
} from '../../utils/api/thunks';

const WordsList = ({ currentWords }) => {
  const [activedWord, setActivedWord] = useState(currentWords[0]);
  const setActiveWord = (wordItem) => {
    setActivedWord(wordItem);
  };
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const { langGroupNumber, bookPage } = useSelector((state) => state.words);

  useEffect(() => {
    setActivedWord(currentWords[0]);
  }, [currentWords]);

  const addtoDifficultWords = async () => {
    if (activedWord.userWord) {
      await dispatch(
        updateUserWordsById({
          userId: user.userId,
          wordId: activedWord._id,
          difficulty: 'hard',
          isLearned: false,
        })
      );
      await dispatch(
        getLearnedWords({
          userId: user.userId,
          difficulty: 'studied',
          isLearned: true,
          page: bookPage,
        })
      );
    } else {
      await dispatch(
        saveUserWord({
          userId: user.userId,
          wordId: activedWord._id,
          difficulty: 'hard',
          isLearned: false,
        })
      );
    }

    await dispatch(
      getAllUserAgregatedWords({
        userId: user.userId,
        group: langGroupNumber,
        page: bookPage,
      })
    );
  };
  const addtoLearnedWords = async () => {
    localStorage.setItem('activeWordId', activedWord._id);
    if (activedWord.userWord) {
      await dispatch(
        updateUserWordsById({
          userId: user.userId,
          wordId: activedWord._id,
          difficulty: 'studied',
          isLearned: true,
        })
      );
      await dispatch(
        getDifficultWords({
          userId: user.userId,
          difficulty: 'hard',
          isLearned: false,
          page: bookPage,
        })
      );
    } else {
      await dispatch(
        saveUserWord({
          userId: user.userId,
          wordId: activedWord._id,
          difficulty: 'studied',
          isLearned: true,
        })
      );
    }
    await dispatch(
      getAllUserAgregatedWords({
        userId: user.userId,
        group: langGroupNumber,
        page: bookPage,
      })
    );
  };
  const delDifficultWord = async () => {
    if (activedWord.userWord) {
      await dispatch(
        updateUserWordsById({
          userId: user.userId,
          wordId: activedWord._id,
          difficulty: 'easy',
          isLearned: false,
        })
      );
      await dispatch(
        getDifficultWords({
          userId: user.userId,
          difficulty: 'hard',
          isLearned: false,
          page: bookPage,
        })
      );
    }

    await dispatch(
      getAllUserAgregatedWords({
        userId: user.userId,
        group: langGroupNumber,
        page: bookPage,
      })
    );
  };
  return (
    <div className="container  mx-auto mt-10">
      <h2 className="text-2xl uppercase p-2 text-white">слова</h2>
      <div className=" container flex flex-col-reverse sm:flex-row columns-2 gap -3 justify-center">
        <div className=" flex flex-wrap gap-2 w-full items-center justify-items-center sm:w-2/3 mt-5">
          {currentWords &&
            currentWords.map((wordItem) => (
              <WordCard
                id={isAuth ? wordItem._id : wordItem.id}
                key={isAuth & wordItem ? wordItem._id : wordItem.id}
                name={wordItem.word}
                translateName={wordItem.wordTranslate}
                showCardInfo={() => setActiveWord(wordItem)}
                activeWord={activedWord ? activedWord : ''}
                word={wordItem}
              />
            ))}
        </div>

        {activedWord && (
          <Card
            delDifficultWordById={delDifficultWord}
            addtoDifficultWords={addtoDifficultWords}
            addtoLearnedWords={addtoLearnedWords}
            activeWord={activedWord}
            key={isAuth ? activedWord._id : activedWord.id}
          />
        )}
      </div>
    </div>
  );
};

export default WordsList;
