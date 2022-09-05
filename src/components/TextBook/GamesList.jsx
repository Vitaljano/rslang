import React from 'react';
import { gamesInfoData } from '../../data/gamesInfo';
import GameCard from './GameCard';
import { setGamesSrartFlag } from '../../store/reducers/GamesSlice';
import { useDispatch } from 'react-redux';

const GamesList = (currentWords) => {
  const dispatch = useDispatch();
  const setGameMode = () => {
    dispatch(setGamesSrartFlag(true));
  };

  return (
    <div
      className={`container  mx-auto mt-10
      ${
        currentWords.currentWords.length
          ? ''
          : 'opacity-40 pointer-events-none grayscale'
      }`}
    >
      <h2 className="text-2xl uppercase p-2 text-white">Игры</h2>
      <div className="container mx-auto mt-10 flex justify-center gap-5 flex-col sm:flex-row">
        {gamesInfoData.map((gameItem) => (
          <GameCard
            link={gameItem.link}
            name={gameItem.name}
            description={gameItem.description}
            img={gameItem.img}
            key={gameItem.id}
            onClick={setGameMode}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
