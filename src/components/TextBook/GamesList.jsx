import React from 'react';
import { gamesInfoData } from '../../data/gamesInfo';
import GameCard from './GameCard';
import { setGamesSrartFlag } from '../../store/reducers/GamesSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getWordsForRegUserGame,
  // getDifficultWords,
  getAllDifficultWords,
} from '../../utils/api/thunks';

const GamesList = () => {
  const { langGroupNumber } = useSelector((state) => state.words);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const setGameMode = () => {
    dispatch(setGamesSrartFlag(true));
    if (langGroupNumber === 6) {
      dispatch(
        getAllDifficultWords({
          userId: user.userId,
          difficulty: 'hard',
          isLearned: false,
        })
      );
    } else {
      dispatch(
        getWordsForRegUserGame({ userId: user.userId, group: langGroupNumber })
      );
    }
  };

  return (
    <div className="container  mx-auto mt-10">
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
