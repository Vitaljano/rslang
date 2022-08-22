import React from 'react';
import Header from '../components/Header';
import ModalStart from '../components/AudioGame/ModalStart';
import AudioChallenge from '../components/AudioGame/AudioChallenge';

function AudioGame() {
  const [activeModal, setActiveModal] = React.useState(true);

  return (
    <>
      <Header />
      <div className="wrapper bg-yellow p-10 flex justify-center align-center h-screen">
        {activeModal ? (
          <ModalStart setActiveModal={setActiveModal} />
        ) : (
          <AudioChallenge />
        )}
      </div>
    </>
  );
}

export default AudioGame;
