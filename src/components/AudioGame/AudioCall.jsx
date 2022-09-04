import React from 'react';
import { API_URL } from '../../utils/api/http';
import axios from 'axios';

import Card from './Card';
import AudioResults from './AudioResults';

function AudioCall() {
  const correctSound = new Audio(process.env.PUBLIC_URL + '/audio/correct.mp3');
  const inorrectSound = new Audio(
    process.env.PUBLIC_URL + '/audio/incorrect.mp3'
  );
  const [results, setResults] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [wrongAns, setWrongAns] = React.useState([]);
  const [questionNumber, setQuestionNumber] = React.useState(0);

  const [lives, setLives] = React.useState(5);

  const onRightAnswer = () => {
    correctSound.play();
    setQuestionNumber(questionNumber + 1);
    if (questionNumber > 18 || lives === 1) {
      setResults(true);
    }
  };
  const onWrongAnswer = () => {
    inorrectSound.play();
    setLives(lives - 1);
    setQuestionNumber(questionNumber + 1);
    if (questionNumber > 18 || lives === 1) {
      setResults(true);
    }
  };

  React.useEffect(() => {
    axios
      .get(API_URL + '/words', {
        params: { page: 2, group: 2 },
      })
      .then((responce) => {
        const data = responce.data;
        return data;
      })
      .then((data) => {
        setQuestions(data[questionNumber]);
        let result = data.map(({ wordTranslate }) => wordTranslate);
        setWrongAns(result);
      });
  }, [questionNumber, lives]);

  return (
    <>
      <div className="container w-4/6 h-5/6 flex flex-col items-center relative fixed top-4">
        {results ? (
          <AudioResults setResults={setResults} />
        ) : (
          <>
            <div className="lives flex flex-row gap-2 mb-2">
              {[...Array(lives)].map((el, i) => (
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
