import Button from './Button';
import Modal from '../Modal';

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

export default WindowToStartGame;
