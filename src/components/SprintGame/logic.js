import GameService from '../../services/gamesService';

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

  const transformData = [...notLearnedWords, ...gamesRoundWords].map((item) => {
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

export const getQuestionsForUserService = async (page, group, userId) => {
  const gamesRoundWords = await GameService.questionsForUserMenu({
    page,
    group,
    userId,
  });

  const transformData = gamesRoundWords.map((item) => {
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

//// not login

export const getQuestionsForMenuService = async (page, group) => {
  const gamesRoundWords = await GameService.questionsForMenu({
    page,
    group,
  });
  const transformData = [...gamesRoundWords].map((item) => {
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

export const getQuestionsForTextBookService = async (page, group) => {
  const gamesRoundWords = await GameService.questionsForTextbook({
    page,
    group,
  });
  const transformData = [...gamesRoundWords].map((item) => {
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
