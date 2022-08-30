import { API_URL } from '../../utils/api/http';
import axios from 'axios';

const generateQuestion = async (words) => {
  const questions = [];

  for (const item of words) {
    const truthOrLie = Math.random() > 0.5 ? true : false;

    if (truthOrLie) {
      item.truth = true;
      questions.push(item);
    } else {
      // fix if random get true index
      const index = Math.floor(Math.random() * words.length);

      item.wordTranslate = words[index].wordTranslate;
      item.truth = false;

      questions.push(item);
    }
  }
  return questions;
};

export const getQuestions = async (page) => {
  const response = await axios.get(API_URL + '/words', {
    params: { page: page, group: 0 },
  });
  const data = await response.data;
  const transformData = data.map((item) => {
    return { id: item.id, word: item.word, wordTranslate: item.wordTranslate };
  });

  const questions = await generateQuestion(transformData);
  return questions;
};
