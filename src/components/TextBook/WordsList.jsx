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
        group: Number(localStorage.getItem('langGroupNumber')),
        page: Number(localStorage.getItem('bookPage')),
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
        group: Number(localStorage.getItem('langGroupNumber')),
        page: Number(localStorage.getItem('bookPage')),
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
        })
      );
    }

    await dispatch(
      getAllUserAgregatedWords({
        userId: user.userId,
        group: Number(localStorage.getItem('langGroupNumber')),
        page: Number(localStorage.getItem('bookPage')),
      })
    );
  };
  return (
    <div className="container  mx-auto mt-10">
      <h2 className="text-2xl uppercase p-8 text-white">слова</h2>
      <div className=" container mt-5 flex flex-col-reverse sm:flex-row flex columns-2 gap -3 justify-between">
        <div className="flex flex-wrap gap-2 w-full items-center justify-items-center sm:w-2/3 mt-5">
          {currentWords &&
            currentWords.map((wordItem) => (
              <WordCard
                id={isAuth ? wordItem._id : wordItem.id}
                key={isAuth ? wordItem._id : wordItem.id}
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
