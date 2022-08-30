import React from 'react';
import { gamesInfoData } from '../../data/gamesInfo';
import GameCard from './GameCard';

const GamesList = () => {
  return (
    <div className="container mx-auto mt-10 flex justify-center gap-5 flex-col sm:flex-row">
      <h2 className="text-2xl uppercase p-8 text-white">Игры</h2>
      {gamesInfoData.map((gameItem) => (
        <GameCard
          link={gameItem.link}
          name={gameItem.name}
          description={gameItem.description}
          img={gameItem.img}
          key={gameItem.id}
        />
      ))}
    </div>
  );
};

export default GamesList;
