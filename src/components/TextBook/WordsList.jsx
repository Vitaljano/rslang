import React from 'react';
import WordCard from './WordCard';
import Card from '../Card';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserWord, deleteUserWordsBIyd } from '../../utils/api/thunks';

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
    dispatch(
      saveUserWord({
        userId: user.userId,
        wordId: activedWord._id,
        difficulty: 'hard',
        isLearned: false,
      })
    );
  };
  const addtoLearnedWords = async () => {
    localStorage.setItem('activeWordId', activedWord._id);
    dispatch(
      saveUserWord({
        userId: user.userId,
        wordId: activedWord._id,
        difficulty: 'easy',
        isLearned: true,
      })
    );
  };
  const delSavedWord = async () => {
    dispatch(
      deleteUserWordsBIyd({
        userId: user.userId,
        wordId: activedWord._id,
      })
    );
  };
  return (
    <div className="container  mx-auto mt-10">
      СЛОВА
      <div className=" container mt-5 flex columns-2 gap -3 justify-between">
        <div className="flex w-2/3 flex-wrap gap-2 justify-items-center">
          {currentWords &&
            currentWords.map((wordItem) => (
              <WordCard
                id={isAuth ? wordItem._id : wordItem.id}
                key={isAuth ? wordItem._id : wordItem.id}
                name={wordItem.word}
                translateName={wordItem.wordTranslate}
                showCardInfo={() => setActiveWord(wordItem)}
                activeWord={activedWord ? activedWord._id : ''}
              />
            ))}
        </div>

        {activedWord && (
          <Card
            delSavedWordById={delSavedWord}
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
