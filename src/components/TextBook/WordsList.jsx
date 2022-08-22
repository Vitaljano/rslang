import React from 'react';
import WordCard from './WordCard';
import Card from '../Card';

const WordsList = ({ currentWords, cardData, hahdleClick }) => {
  return (
    <div className="container  mx-auto mt-10">
      СЛОВА
      <div className=" container mt-5 flex columns-2 gap -3 justify-between">
        <div className="flex w-2/3 flex-wrap gap-2 justify-items-center">
          {currentWords &&
            currentWords.map((wordItem) => (
              <WordCard
                id={wordItem.id}
                key={wordItem.id}
                name={wordItem.word}
                translateName={wordItem.wordTranslate}
                hahdleClick={hahdleClick}
              />
            ))}
        </div>

        {cardData && (
          <Card
            name={cardData.name}
            key={cardData.id}
            id={cardData.id}
            word={cardData.word}
            image={cardData.image}
            audio={cardData.audio}
            audioMeanind={cardData.audioMeanind}
            audioExample={cardData.audioExample}
            textMeaning={cardData.textMeaning}
            textExample={cardData.textExample}
            transcription={cardData.transcription}
            wordTranslate={cardData.wordTranslate}
            textMeaningTranslate={cardData.textMeaningTranslate}
            textExampleTranslate={cardData.textExampleTranslate}
          />
        )}
      </div>
    </div>
  );
};

export default WordsList;
