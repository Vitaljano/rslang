import React from 'react';
import Header from '../components/Header';
import ModalStart from '../components/AudioGame/ModalStart';
import AudioPreloader from '../components/AudioGame/AudioPreloader';

function AudioGame() {
  const [activeModal, setActiveModal] = React.useState(true);

  return (
    <>
      <Header />
      <div className="wrapper bg-yellow p-10 flex justify-center align-center h-screen">
        {activeModal ? (
          <ModalStart setActiveModal={setActiveModal} />
        ) : (
          <AudioPreloader />
        )}
      </div>
    </>
  );
}

export default AudioGame;
