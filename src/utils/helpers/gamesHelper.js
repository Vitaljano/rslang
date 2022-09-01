//При игре из меню для зарегоного юзера
// берем со стора массив слов с текущей страницы и группы по ссылке

const { allUserWords } = useSelector((state) => state.userWords);
const { langGroupNumber } = useSelector((state) => state.words);
const { difficultWords } = useSelector((state) => state.agregatingWords);
const { AllWordsOfGroupforRegisterUser } = useSelector((state) => state.games);

//
// проверяем из какой группы был переход(6-сложные слова) и получаем массив
if (langGroupNumber === 6) {
  const wordsArray = [...difficultWords.paginatedResults];
} else {
  const wordsArray = [...allUserWords.paginatedResults];
}

//
//фильтруем массив со словами из стора

export const checkIsLearnedWordItem = (wordItem) => {
  return wordItem.userWord && wordItem.userWord.difficulty === 'studied';
};
export const getNotLearnedWords = (wordsArray) => {
  return [...wordsArray].filter((wordItem) => {
    return !checkIsLearnedWordItem(wordItem);
  });
};

// если неизученных слов меньше 20  то нам тадо их дополнить
//дополняем их из всех слов юзера их всего 600 в группе
//получаем все слова данной группы
//можно в стор предворительно записать и забрать от туда а можно взять с сервера
const wordsArray2 = [AllWordsOfGroupforRegisterUser.paginatedResults];
//а потом их фильтруем их для игры

export const getWordsFromUserTextbook = ({ group, page, wordsArray }) => {
  const currentWords = wordsArray.filter(
    (wordItem) =>
      ((wordItem.group === group && wordItem.page <= page) ||
        wordItem.group < group) &&
      !checkIsLearnedWord(wordItem)
  );

  return currentWords;
};

//При переходе с меню массив будет доступен,
const wordsArray = [...allUserWords.paginatedResults];
//указанный номер группы и страницы передать через
//только подгрузить нада ,
// dispatch(setLangGroupNumber(langLevel));
// dispatch(setPage(page));
//

//в  const difficultHandle = (e) => {
//   setDifficult(e.target.textContent - 1);
//   setActiveModal(false);
//   preLoader(true);
// }; Modal

//или подгрузить через axios
//только надо к нему токен привязать как я уже писал
// И тогда при переходе в учебник после игры откроеться группа
//
//Доступен по

//

//
//для обновления

//промапиться по результатам и каждое угаданное слово запушить на сервер

const response = await $authHost.put(`/users/${userId}/words/${wordId}`, {
  difficulty: difficulty,
  optional: { isLearned: isLearned },
});

// где
// userId: user.userId,
// wordId: activedWord._id,
// difficulty: 'studied',
// isLearned: true,
