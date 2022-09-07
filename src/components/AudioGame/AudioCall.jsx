import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { shuffleArray } from '../../utils/helpers/shuffle';
import Card from './Card';
import AudioResults from './AudioResults';
import GameService from '../../services/gamesService';
import { updateUserWordsById, saveUserWord } from '../../utils/api/thunks';

function AudioCall() {
  const { isAuth } = useSelector((state) => state.auth);
  const { isGameFromTextbook } = useSelector((state) => state.games);
  const difficulty = useSelector((state) => state.words.langGroupNumber);
  const page = useSelector((state) => state.words.bookPage);
  const dispatch = useDispatch();

  const correctSound = new Audio(process.env.PUBLIC_URL + '/audio/correct.mp3');
  const inorrectSound = new Audio(
    process.env.PUBLIC_URL + '/audio/incorrect.mp3'
  );
  const [results, setResults] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [wrongAns, setWrongAns] = React.useState([]);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [log, setLog] = React.useState([]);

  const [lives, setLives] = React.useState(5);
  const [currentAnswerId, setCurrentAnswerId] = React.useState();

  const onRightAnswer = () => {
    correctSound.play();
    setQuestionNumber(questionNumber + 1);
    if (questionNumber > 18 || lives === 1) {
      setResults(true);
    }
    if (isAuth) {
      setLog((prev) => {
        return [
          ...prev,
          {
            id: questions._id,
            translate: questions.wordTranslate,
            audio: questions.audio,
            word: questions.word,
            check: true,
          },
        ];
      });
    } else {
      setLog((prev) => {
        return [
          ...prev,
          {
            id: questions.id,
            translate: questions.wordTranslate,
            audio: questions.audio,
            word: questions.word,
            check: true,
          },
        ];
      });
    }
  };
  const onWrongAnswer = () => {
    inorrectSound.play();
    setLives(lives - 1);
    setQuestionNumber(questionNumber + 1);
    if (questionNumber > 18 || lives === 1) {
      setResults(true);
    }
    if (isAuth) {
      setLog((prev) => {
        return [
          ...prev,
          {
            id: questions._id,
            translate: questions.wordTranslate,
            audio: questions.audio,
            word: questions.word,
            check: false,
          },
        ];
      });
    } else {
      setLog((prev) => {
        return [
          ...prev,
          {
            id: questions.id,
            translate: questions.wordTranslate,
            audio: questions.audio,
            word: questions.word,
            check: false,
          },
        ];
      });
    }
  };
  const onRestartHandle = () => {
    setLives(5);
    setResults(false);
    setLog([]);
  };

  const setCurrentAnswer = (log) => {
    const currentWords = [];
    log.map((item) => {
      if (item.check) {
        currentWords.push(item);
      }
    });

    return setCurrentAnswerId(currentWords);
  };
  useEffect(() => {
    if (isAuth) {
      setCurrentAnswer(log);
    }
  }, [log]);

  useEffect(() => {
    if (isAuth) {
      updateWordsDifficulty(currentAnswerId);
    }
  }, [lives <= 1]);

  const updateWordsDifficulty = async (array) => {
    array &&
      (await array.map(async (item) => {
        if (item.userWord) {
          await dispatch(
            updateUserWordsById({
              userId: localStorage.getItem('userId'),
              wordId: item.id,
              difficulty: 'studied',
              isLearned: true,
            })
          );
        } else {
          await dispatch(
            saveUserWord({
              userId: localStorage.getItem('userId'),
              wordId: item.id,
              difficulty: 'studied',
              isLearned: true,
            })
          );
        }
      }));
  };

  React.useEffect(() => {
    if (isAuth) {
      const generateQuestionsForUserMenu = async (page, difficulty, userId) => {
        const gamesRoundWords = await GameService.questionsForUserMenuSprint({
          page: page,
          group: difficulty,
          userId: userId,
        });
        const a = gamesRoundWords[questionNumber];
        if (a) {
          setQuestions(a);
          let result = gamesRoundWords.map(
            ({ wordTranslate }) => wordTranslate
          );
          setWrongAns(result);
        }
      };
      const generateQuestionsForUserTextBook = async (
        page,
        difficulty,
        userId
      ) => {
        const notLearnedWords = await GameService.questionsForUserTexbook({
          page: page,
          group: difficulty,
          userId: userId,
        });

        const generatedNotLearnedWords = await GameService.getAllWordsForFilter(
          {
            page: page,
            group: difficulty,
            userId: userId,
          }
        );

        const gamesRoundWords = [
          ...notLearnedWords,
          ...shuffleArray(generatedNotLearnedWords),
        ];

        const a = gamesRoundWords[questionNumber];
        if (a) {
          setQuestions(a);
          let result = gamesRoundWords.map(
            ({ wordTranslate }) => wordTranslate
          );
          setWrongAns(result);
        }
      };

      try {
        if (isGameFromTextbook) {
          generateQuestionsForUserTextBook(
            page,
            difficulty,
            localStorage.getItem('userId')
          );
        } else {
          generateQuestionsForUserMenu(
            page,
            difficulty,
            localStorage.getItem('userId')
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      const generateQuestionsTextbook = async (page, difficulty) => {
        const gamesRoundWords = await GameService.questionsForTextbook({
          page: page,
          group: difficulty,
        });

        const a = gamesRoundWords[questionNumber];
        if (a) {
          setQuestions(a);
          let result = gamesRoundWords.map(
            ({ wordTranslate }) => wordTranslate
          );
          setWrongAns(result);
        }
      };

      const generateQuestionsMenu = async (page, difficulty) => {
        const gamesRoundWords = await GameService.questionsForMenu({
          page: page,
          group: difficulty,
        });
        const a = gamesRoundWords[questionNumber];
        if (a) {
          setQuestions(a);
          let result = gamesRoundWords.map(
            ({ wordTranslate }) => wordTranslate
          );
          setWrongAns(result);
        }
      };
      try {
        if (isGameFromTextbook) {
          generateQuestionsTextbook(page, difficulty);
        } else {
          generateQuestionsMenu(page, difficulty);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [questionNumber, lives]);
  return (
    <>
      <div className="container w-4/6 h-5/6 flex flex-col items-center relative  top-4">
        {results ? (
          <AudioResults onRestartHandle={onRestartHandle} log={log} />
        ) : (
          <>
            <div className="lives flex flex-row gap-2 mb-2">
              {[...Array(lives)].map((_el, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  id="Filled"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path
                    fill="#E03168"
                    d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
                  />
                </svg>
              ))}
            </div>
            <Card
              wrongAns={wrongAns}
              answer={questions.wordTranslate}
              onRightAnswer={onRightAnswer}
              onWrongAnswer={onWrongAnswer}
              audio={questions.audio}
            />
          </>
        )}
      </div>
    </>
  );
}

export default AudioCall;
