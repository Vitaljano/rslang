import { API_URL } from '../../utils/api/http';
import Card from './Card';
import PreLoader from './PreLoader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GameResult from './GameResult';
import ModalStart from './ModalWindow';

function MainScreen() {
  const [isModalActive, setIsModalActive] = useState(true);
  const [preLoader, setPreLoader] = useState(false);

  const [isGameStart, setGameStart] = useState(false);
  const [isGameEnd, setGameEnd] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [words, setWords] = useState([]);
  const [wordToGuess, setWordToGuess] = useState(null);
  const [wordAnswer, setWordAnswer] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [userAnswerLog, setUserAnswerLog] = useState([]);
  const [level, setLevel] = useState(1);
  const [correctAnswersInRow, setCorrectAnswersInRow] = useState(0);
  const correctSound = new Audio(process.env.PUBLIC_URL + '/audio/correct.mp3');
  const inCorrectSound = new Audio(
    process.env.PUBLIC_URL + '/audio/incorrect.mp3'
  );

  useEffect(() => {
    async function getData() {
      const response = await axios.get(API_URL + '/words', {
        params: { page: 1, group: 0 },
      });
      const data = await response.data;
      const transformData = data.map((item) => {
        return [item.word, item.wordTranslate];
      });
      setWords(transformData);
    }
    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    generateQuestion();
  }, [questionNumber]);

  /* const randomNumbers = () => {
    const ranNums = [];
    const nums = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    let i = nums.length;
    let j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  };*/

  const generateQuestion = () => {
    if (words.length !== 0) {
      const trueOrNot = Math.random() > 0.5 ? true : false;

      if (trueOrNot) {
        const index = Math.floor(Math.random() * 20);
        setWordToGuess(words[index][0]);
        setWordAnswer(words[index][1]);
        setIsCorrect(true);
      } else {
        const indexFalseEng = Math.floor(Math.random() * 20);
        const indexFalseRu = Math.floor(Math.random() * 20);
        setWordToGuess(words[indexFalseEng][0]);
        setWordAnswer(words[indexFalseRu][1]);
        setIsCorrect(false);
      }
    }
  };

  const onAnswerHandle = (event) => {
    setQuestionNumber((current) => {
      return current + 1;
    });
    const userAnswer = event.target.dataset.answer === 'true' ? true : false;

    setUserAnswerLog((prevArr) => {
      return [
        ...prevArr,
        {
          word: wordToGuess,
          transcription: wordAnswer,
          userAnswer: userAnswer,
        },
      ];
    });

    if (userAnswer === isCorrect) {
      setCorrectAnswersInRow((prev) => prev + 1);
      checkLevel();
      correctSound.play();
    } else {
      setCorrectAnswersInRow(0);
      checkLevel();
      inCorrectSound.play();
    }
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
  const pointsCounter = (points) => {};

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
        <Card
          question={wordToGuess}
          answer={wordAnswer}
          onAnswer={onAnswerHandle}
          gameStart={isGameStart}
          gameEnd={onGameEndHandle}
          level={level}
          pointsCounter={pointsCounter}
        />
      )}
      {showResult && isGameEnd && (
        <GameResult onRestart={onRestartHandle} log={userAnswerLog} />
      )}
    </>
  );
}

export default MainScreen;
