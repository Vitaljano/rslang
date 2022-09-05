import Card from './Card';
import PreLoader from './PreLoader';
import { useEffect, useState } from 'react';
import GameResult from './GameResult';
import ModalStart from './ModalWindow';
import {
  getQuestionsForUserTextBookService,
  getQuestionsForUserService,
  getQuestionsForMenuService,
  getQuestionsForTextBookService,
} from './logic';
import SoundMute from './SoundMute';
import { useSelector } from 'react-redux/es/exports';
import { getRandomInt } from '../../utils/helpers/random';

function MainScreen() {
  const { langGroupNumber, bookPage } = useSelector((state) => state.words);
  const { isAuth } = useSelector((state) => state.auth);
  const { isGameFromTextbook } = useSelector((state) => state.games);
  const [points, setPoints] = useState(0);
  const [isModalActive, setIsModalActive] = useState(true);
  const [difficult, setDifficult] = useState(0);
  const [preLoader, setPreLoader] = useState(false);
  const [loadMore, setLoadMore] = useState(0);
  const [isGameStart, setGameStart] = useState(false);
  const [isGameEnd, setGameEnd] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [words, setWords] = useState([]);
  const [mute, setMute] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswerLog, setUserAnswerLog] = useState([]);
  const [level, setLevel] = useState(1);
  const [correctAnswersInRow, setCorrectAnswersInRow] = useState(0);
  const [saveStat, setSaveStat] = useState(0);
  const correctSound = new Audio(process.env.PUBLIC_URL + '/audio/correct.mp3');
  const inCorrectSound = new Audio(
    process.env.PUBLIC_URL + '/audio/incorrect.mp3'
  );

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  // update stat if is max score
  useEffect(() => {
    const maxPoints = localStorage.getItem('maxScore');
    const correctAnswers = localStorage.getItem('correctAnswers');

    if (correctAnswers <= correctAnswersInRow) {
      localStorage.setItem('correctAnswers', correctAnswersInRow);
    }
    if (maxPoints <= points) {
      localStorage.setItem('maxScore', points);
    }
  }, [saveStat]);

  useEffect(() => {
    if (isAuth) {
      const generateQuestionsForUser = async (loadMore, difficult, userId) => {
        const result = await getQuestionsForUserService(
          loadMore,
          difficult,
          userId
        );
        setWords([...result]);
      };

      const generateQuestionsForUserTextbook = async (
        loadMore,
        difficult,
        userId
      ) => {
        const result = await getQuestionsForUserTextBookService(
          loadMore,
          difficult,
          userId
        );
        setWords([...result]);
      };
      try {
        if (isGameFromTextbook) {
          generateQuestionsForUserTextbook(
            bookPage,
            langGroupNumber,
            localStorage.getItem('userId')
          );
        } else {
          generateQuestionsForUser(
            getRandomInt(0, 29),
            difficult,
            localStorage.getItem('userId')
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      const generateQuestionsTextbook = async (loadMore, difficult) => {
        const result = await getQuestionsForTextBookService(
          loadMore,
          difficult
        );
        setWords([...result]);
      };
      const generateQuestionsMenu = async (loadMore, difficult) => {
        const result = await getQuestionsForMenuService(loadMore, difficult);
        setWords([...result]);
      };
      try {
        if (isGameFromTextbook) {
          generateQuestionsTextbook(bookPage, langGroupNumber);
        } else {
          generateQuestionsMenu(getRandomInt(0, 29), difficult);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [loadMore, difficult]);

  const checkAnswer = (userAnswer) => {
    // check is user answer true
    if (words[questionNumber].truth === userAnswer) {
      setPoints((prev) => {
        return prev + 5 * level;
      });

      setCorrectAnswersInRow((prev) => (prev += 1));
      if (!mute) {
        correctSound.play();
      }
    } else {
      setCorrectAnswersInRow(0);
      if (!mute) {
        inCorrectSound.play();
      }
    }

    checkLevel();
    // logging user answer
    const userAnswerToLog = words[questionNumber];
    userAnswerToLog.userAnswer = userAnswer;

    setUserAnswerLog((prev) => {
      return [...prev, userAnswerToLog];
    });

    if (words.length - 1 === questionNumber) {
      setLoadMore((prev) => (prev += 1));
      setQuestionNumber(0);
    }
  };

  const onAnswerHandle = (event) => {
    checkAnswer(event.target.dataset.answer === 'true');
    setQuestionNumber((prev) => (prev += 1));
  };

  const onGameEndHandle = () => {
    setSaveStat((prev) => (prev += 1));

    setGameEnd(true);
    setShowResult(true);
  };
  const onRestartHandle = () => {
    setPoints(0);
    setPreLoader(true);
    setGameEnd(false);
    setShowResult(false);
    setGameStart(false);
  };

  const checkLevel = () => {
    if (correctAnswersInRow > 5) {
      setLevel(2);
    }
    if (correctAnswersInRow > 10) {
      setLevel(3);
    }
    if (correctAnswersInRow > 20) {
      setLevel(4);
    }
    if (correctAnswersInRow === 0) {
      setLevel(1);
    }
  };

  return (
    <>
      {isModalActive && (
        <ModalStart
          setActiveModal={setIsModalActive}
          preLoader={setPreLoader}
          setDifficult={setDifficult}
        />
      )}
      {preLoader && (
        <PreLoader startGame={setGameStart} preLoader={setPreLoader} />
      )}
      {isGameStart && !isGameEnd && (
        <>
          <div className="container">
            <SoundMute isMute={mute} setMute={setMute} />
          </div>
          <Card
            question={words[questionNumber].word}
            answer={words[questionNumber].wordTranslate}
            onAnswer={onAnswerHandle}
            gameStart={isGameStart}
            gameEnd={onGameEndHandle}
            points={points}
            audio={words[questionNumber].audio}
            level={level}
          />
        </>
      )}
      {showResult && isGameEnd && (
        <GameResult
          score={points}
          onRestart={onRestartHandle}
          log={userAnswerLog}
        />
      )}
    </>
  );
}

export default MainScreen;
