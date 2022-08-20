import Card from '../../src/components/card';
const mock = [
  {
    id: 1,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
  {
    id: 2,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
  {
    id: 3,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
  {
    id: 4,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
  {
    id: 5,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
  {
    id: 6,
    group: 2,
    page: 2,
    word: 'duck',
    image: 'https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg',
    audio: '',
    audioMeanind: '',
    audioExample: '',
    textMeaning: 'A duck is a small water bird.People feed ducks at the lake.',
    textExample: '',
    transcription: '[dʌk]',
    wordTranslate: '',
    textMeaningTranslate: '',
    textExampleTranslate: '',
  },
];

function TextBook() {
  return (
    <section className="bg-green-900 pt-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col max-w-xs justify-center  sm:max-w-none sm:grid sm:grid-cols-2 sm:auto-cols  md:grid-cols-3 lg:grid-cols-4 gap-4 sm:items-center">
          {mock.map((item) => (
            <Card card={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TextBook;
