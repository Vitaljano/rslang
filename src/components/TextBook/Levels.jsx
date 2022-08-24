import React from 'react';
import LevelCard from './LevelCard';

const levelCardsData = [
  { id: 1, name: 'Easy', abbr: 'A1', langLevel: 0 },
  { id: 2, name: 'Easy', abbr: 'A2', langLevel: 1 },
  { id: 3, name: 'Medium', abbr: 'B1', langLevel: 2 },
  { id: 4, name: 'Medium', abbr: 'B2', langLevel: 3 },
  { id: 5, name: 'Hard', abbr: 'C1', langLevel: 4 },
  { id: 6, name: 'Hard', abbr: 'C2', langLevel: 5 },
];

const Levels = ({ handleClick }) => {
  return (
    <div className="container  mx-auto mt-10">
      УРОВНИ
      <div className="container items-center mx-auto flex justify-center align-middle mb-4 flex-wrap gap-3">
        {levelCardsData.map((levelItem) => (
          <LevelCard
            key={levelItem.id}
            name={levelItem.name}
            levelAbrr={levelItem.abbr}
            langLevel={levelItem.langLevel}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Levels;