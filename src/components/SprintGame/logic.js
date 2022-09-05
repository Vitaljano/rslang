/* eslint-disable */

// import { API_URL } from '../../utils/api/http';
// import axios from 'axios';
import GameService from '../../services/gamesService';
import { useSelector } from 'react-redux';

// const { ssss } = useSelector(
//   (state) => state.games.AllWordsOfGroupforRegisterUser.paginatedResults
// );

async function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

const generateQuestion = async (words) => {
  const questions = [];

  for (let i = 0; i < words.length; i++) {
    const truthOrLie = Math.random() > 0.5 ? true : false;

    if (truthOrLie) {
      words[i].truth = true;
      questions.push(words[i]);
    } else {
      // fix if random get true index
      const randomIndex = await getRandomIndex(words.length);

      if (randomIndex === i) {
        generateQuestion(words);
      }

      words[i].wordTranslate = words[randomIndex].wordTranslate;
      words[i].truth = false;

      questions.push(words[i]);
    }
  }
  return questions;
};

export const getQuestionsForUserTextBookService = async (
  page,
  group,
  userId
) => {
  const notLearnedWords = await GameService.questionsForUserTextbook({
    page,
    group,
    userId,
  });
  const gamesRoundWords = await GameService.getAllWordsForFilter({
    page,
    group,
    userId,
  });
  // console.log(notLearnedWords);
  // console.log(gamesRoundWords);

  const transformData = [...notLearnedWords, ...gamesRoundWords].map((item) => {
    return {
      id: item.id,
      word: item.word,
      wordTranslate: item.wordTranslate,
      audio: item.audio,
    };
  });
  // console.log(transformData);

  const questions = await generateQuestion(transformData);
  return questions;
};

export const getQuestionsForUserService = async (page, group, userId) => {
  const gamesRoundWords = await GameService.questionsForUserMenu({
    page,
    group,
    userId,
  });

  // const gamesRoundWords = await response;
  console.log(gamesRoundWords);

  const transformData = gamesRoundWords.map((item) => {
    return {
      id: item.id,
      word: item.word,
      wordTranslate: item.wordTranslate,
      audio: item.audio,
    };
  });
  console.log(transformData);

  const questions = await generateQuestion(transformData);
  return questions;
};

// export const getQuestionsForUser = async (page, group) => {
//   const response = await axios.get(API_URL + '/words', {
//     params: { page: page, group: group },
//   });
// };
