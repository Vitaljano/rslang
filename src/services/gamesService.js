import { $authHost, $host } from '../utils/api/http';
/* eslint-disable */

export const checkIsLearnedWordItem = (wordItem) => {
  return wordItem.userWord && wordItem.userWord.difficulty === 'studied';
};

export const getNotLearnedWords = (wordsArray) => {
  return [...wordsArray].filter((wordItem) => {
    return !checkIsLearnedWordItem(wordItem);
  });
};

export const getAllWords = (group, page, wordsArray) => {
  const currentWords = wordsArray.filter(
    (wordItem) =>
      (wordItem.group === group || wordItem.group < group) &&
      !checkIsLearnedWordItem(wordItem)
  );

  return currentWords;
};
export const getWordsFromUserTextbook = (group, page, wordsArray) => {
  const currentWords = wordsArray.filter(
    (wordItem) =>
      (wordItem.group === group || wordItem.group < group) &&
      !checkIsLearnedWordItem(wordItem)
  );

  return currentWords;
};
export const getWordsFromUserMenu = (group, page, wordsArray) => {
  const currentWords = wordsArray.filter((wordItem) => wordItem.group < group);

  return currentWords;
};

// not learned words
export default class GameService {
  static async getAllWordsForFilter({ userId, group, page }) {
    try {
      const response = await $authHost.get(
        `/users/${userId}/aggregatedWords?wordsPerPage=3600`
      );
      console.log(
        getWordsFromUserTextbook(group, page, response.data[0].paginatedResults)
      );

      return getWordsFromUserTextbook(
        group,
        page,
        response.data[0].paginatedResults
      );
    } catch (e) {
      console.log(e);
    }
  }
  static async questionsForUserTextbook({ userId, group, page }) {
    try {
      const response = await $authHost.get(
        `/users/${userId}/aggregatedWords?wordsPerPage=20&group=${group}&filter=%7B%22page%22%3A${page}%7D`
      );

      return getNotLearnedWords(response.data[0].paginatedResults);
    } catch (e) {
      console.log(e);
    }
  }

  static async questionsForUserMenu({ userId, group, page }) {
    try {
      const response = await $authHost.get(
        `/users/${userId}/aggregatedWords?wordsPerPage=3600`
      );

      return getWordsFromUserMenu(
        group,
        page,
        response.data[0].paginatedResults
      );
    } catch (e) {
      console.log(e);
    }
  }
  ///not login

  static async questionsForMenu({ group, page }) {
    try {
      const response = await $host.get(`/words?wordsPerPage=3600`);
      // console.log(response);

      return getWordsFromUserMenu(group, page, response.data);
    } catch (e) {
      console.log(e);
    }
  }

  static async questionsForTextbook({ group, page }) {
    try {
      const response = await $host.get(`/words?group=${group}&page=${page}`);

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async questionsForMenu(email, password) {
    const response = await $host.post('/signin', {
      email,
      password,
    });
  }
}
