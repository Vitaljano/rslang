//import { useState } from 'react';
//import Card from './Card';
import Modal from '../Modal';
import Button from '../Button';
import Card from './Card';
import Timer from './Timer';
import { useEffect, useState } from 'react';

function PreLoader({ startGame }) {
  const [countDown, setCountDown] = useState(3); // 3 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countDown === 0) {
        startGame();
        clearTimeout(timer);
        return;
      }

      setCountDown((count) => {
        return count - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="animate-ping w-40 h-40 text-5xl text-white rounded-full flex   justify-center items-center font-medium absolute opacity-100 top-2/4 left-2/4   z-40 bg-success">
      {countDown}
    </div>
  );
}
function WindowToStartGame({ onClick }) {
  return (
    <Modal onClick={onClick}>
      <div className="w-80 bg-white p-6 rounded-lg">
        <div className="my-4">
          В этой игре вам необходимо выбрать соответвувет ли перевод
          предложенному слову
        </div>
        <Button className="mx-auto block" content="Поехали" type="sprint" />
      </div>
    </Modal>
  );
}
function MainScreen() {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [preLoader, setPreLoader] = useState(false);
  const [isGameStart, setGameStart] = useState(false);
  const [isEndTimer, setEndTimer] = useState(false);

  const endTimerHandle = (value) => {
    setEndTimer(value);
  };

  const preLoaderHandle = () => {
    setPreLoader(false);
    setGameStart(true);
  };

  const clickHandle = () => {
    setIsOpenModal(false);
    setPreLoader(true);
  };

  return (
    <>
      {isOpenModal && <WindowToStartGame onClick={clickHandle} />}
      <div className="mx-auto w-80 flex justify-between pb-2">
        <Timer start={isGameStart} end={endTimerHandle} />
        {preLoader && <PreLoader startGame={preLoaderHandle} />}
        <div className="w-16 h-16 text-2xl font-medium bg-white rounded-full flex justify-center items-center">
          100
        </div>
      </div>
      <Card />
      {isEndTimer && 'GAME OVER'}
    </>
  );
}

export default MainScreen;
