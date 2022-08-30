import Card from './Card';
import PreLoader from './PreLoader';
import { useEffect, useState } from 'react';
import GameResult from './GameResult';
import ModalStart from './ModalWindow';
import { getQuestions } from './logic';
import SoundMute from './SoundMute';

function MainScreen() {
  const [isModalActive, setIsModalActive] = useState(true);
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
  const correctSound = new Audio(process.env.PUBLIC_URL + '/audio/correct.mp3');
  const inCorrectSound = new Audio(
    process.env.PUBLIC_URL + '/audio/incorrect.mp3'
  );

  useEffect(() => {
    async function generateQuestions() {
      const result = await getQuestions();
      setWords((prev) => [...prev, ...result]);
    }
    try {
      generateQuestions(loadMore);
    } catch (e) {
      console.log(e);
    }
  }, [loadMore]);

  const checkAnswer = (userAnswer) => {
    if (words.length - 2 === questionNumber) {
      setLoadMore((prev) => (prev += 1));
    }

    if (words[questionNumber].truth === userAnswer) {
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

    const userAnswerToLog = words[questionNumber];
    userAnswerToLog.truth = userAnswer;

    setUserAnswerLog((prev) => {
      return [...prev, userAnswerToLog];
    });
  };

  const onAnswerHandle = (event) => {
    checkAnswer(event.target.dataset.answer === 'true');
    setQuestionNumber((prev) => (prev += 1));
  };

  const onGameEndHandle = () => {
    setGameEnd(true);
    setShowResult(true);
  };
  const onRestartHandle = () => {
    setPreLoader(true);
    setGameEnd(false);
    setShowResult(false);
    setGameStart(false);
  };

  const checkLevel = () => {
    if (correctAnswersInRow > 2) {
      setLevel(2);
    }
    if (correctAnswersInRow > 12) {
      setLevel(3);
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
            level={level}
          />
        </>
      )}
      {showResult && isGameEnd && (
        <GameResult onRestart={onRestartHandle} log={userAnswerLog} />
      )}
    </>
  );
}

export default MainScreen;
