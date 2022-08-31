import React from 'react';
import LevelCard from './LevelCard';
import { useSelector } from 'react-redux';

const levelCardsData = [
  { id: 1, name: 'Easy', abbr: 'A1', langLevel: 0 },
  { id: 2, name: 'Easy', abbr: 'A2', langLevel: 1 },
  { id: 3, name: 'Medium', abbr: 'B1', langLevel: 2 },
  { id: 4, name: 'Medium', abbr: 'B2', langLevel: 3 },
  { id: 5, name: 'Hard', abbr: 'C1', langLevel: 4 },
  { id: 6, name: 'Hard', abbr: 'C2', langLevel: 5 },
  // { id: 7, name: 'Difficult Word', abbr: 'User', langLevel: 7 },
];
const difficultCard = {
  id: 7,
  name: 'Сложные слова',
  abbr: 'User',
  langLevel: 6,
};
const learnedCard = {
  id: 8,
  name: 'Изученные слова',
  abbr: 'User',
  langLevel: 7,
};

const Levels = ({ handleClick, activeLevel }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className="container  mx-auto mt-10">
      <h2 className="text-2xl uppercase p-8 text-white">уровни</h2>
      <div className="container items-center mx-auto flex justify-center align-middle mb-4 flex-wrap gap-3">
        {levelCardsData.map((levelItem) => (
          <LevelCard
            key={levelItem.id}
            name={levelItem.name}
            levelAbrr={levelItem.abbr}
            langLevel={levelItem.langLevel}
            handleClick={handleClick}
            activeLevel={activeLevel}
          />
        ))}
        {isAuth && (
          <>
            <LevelCard
              key={difficultCard.id}
              name={difficultCard.name}
              langLevel={difficultCard.langLevel}
              handleClick={handleClick}
              activeLevel={activeLevel}
            />
            <LevelCard
              key={learnedCard.id}
              name={learnedCard.name}
              langLevel={learnedCard.langLevel}
              handleClick={handleClick}
              activeLevel={activeLevel}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Levels;
