import React from 'react';
import { API_URL } from '../../utils/api/http';
import axios from 'axios';

import Card from './Card';
import AudioResults from './AudioResults';
// async function getRandomIndex(length) {
//   return Math.floor(Math.random() * length);
// }

// const generateQuestion = async (words) => {
//
//   for (let i = 0; i < words.length; i++) {
//     const truthOrLie = Math.random() > 0.5 ? true : false;

//     if (truthOrLie) {
//       words[i].truth = true;
//       questions.push(words[i]);
//     } else {
//       // fix if random get true index
//       const randomIndex = await getRandomIndex(words.length);

//       if (randomIndex === i) {
//         generateQuestion(words);
//       }

//       words[i].wordTranslate = words[randomIndex].wordTranslate;
//       words[i].truth = false;

//       questions.push(words[i]);
//     }
//   }
//   return questions;
// };

// export

function AudioCall() {
  const [results, setResults] = React.useState(false);

  const [questions, setQuestions] = React.useState([]);
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const onRightAnswer = () => {
    setQuestionNumber(questionNumber + 1);
    if (questionNumber > 18) {
      setResults(true);
    }
    console.log(questionNumber);
  };

  React.useEffect(() => {
    axios
      .get(API_URL + '/words', {
        params: { page: 1, group: 1 },
      })
      .then((responce) => {
        const data = responce.data;
        return data;
      })
      .then((data) => setQuestions(data[questionNumber]));
  }, [questionNumber]);
  console.log(questions);

  return (
    <>
      <div className="container w-4/6 h-5/6 flex flex-col items-center relative fixed top-4">
        {results ? (
          <AudioResults setResults={setResults} />
        ) : (
          <>
            <div className="lives flex flex-row gap-2 mb-2">
              <svg
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
              <svg
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
              <svg
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
              <svg
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
              <svg
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
            </div>

            <Card
              // question={questions.word}
              answer={questions.wordTranslate}
              onRightAnswer={onRightAnswer}
              audio={questions.audio}
            />
          </>
        )}
      </div>
    </>
  );
}

export default AudioCall;
