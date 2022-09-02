import { API_URL } from '../../utils/api/http';
import axios from 'axios';

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

export const getQuestions = async (page, group) => {
  const response = await axios.get(API_URL + '/words', {
    params: { page: page, group: group },
  });
  const data = await response.data;
  const transformData = data.map((item) => {
    return {
      id: item.id,
      word: item.word,
      wordTranslate: item.wordTranslate,
      audio: item.audio,
    };
  });

  const questions = await generateQuestion(transformData);
  return questions;
};
