import { API_URL } from '../../utils/api/http';
import axios from 'axios';

async function getRandomIndex(length, besides) {
  let randomIndex = Math.floor(Math.random() * length);
  if (randomIndex === besides && besides > 1) {
    randomIndex -= 1;
  } else if (randomIndex === besides && besides < 19) {
    randomIndex += 1;
  }
  return randomIndex;
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
      const randomIndex = await getRandomIndex(words.length, i);
      console.log(randomIndex);

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
