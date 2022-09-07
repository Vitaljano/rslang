export const wordFilters = {
  onlyDifficult: {
    $and: [
      { 'userWord.difficulty': 'difficult' },
      { 'userWord.optional.isLearned': { $ne: true } },
    ],
  },
  learning: {
    $and: [
      { 'userWord.difficulty': 'easy' },
      { 'userWord.optional.isLearned': { $ne: true } },
    ],
  },
};
