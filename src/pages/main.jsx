import startScreenImg from '../img/start-screen.jpg';
import audio from '../img/audio.jpg';
import stats from '../img/stats.jpg';
import book from '../img/book.jpg';
import sprint from '../img/sprint.jpg';
import './main.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col w-full p-4">
        <div className="my-0 mx-auto items-center startscreen flex flex-row w-10/12">
          <div className="startscreen-text flex flex-col gap-8 w-4/12 mr-20">
            <h1 className="text-action text-4xl">
              <b>RSLang</b> - учи английский легко
            </h1>
            <div className="caption text-black text-xl">
              RSLang - это эффективный сервис для увлекательного изучения и
              практики английского языка.
            </div>
            <a href="#about">
              <button
                type="button"
                className="text-white text-xl bg-green-900 transition duration-300 ease-in-out font-medium rounded-lg w-48 h-12 hover:bg-white hover:bg-green-400 "
              >
                Узнать больше
              </button>
            </a>
          </div>
          <img src={startScreenImg} alt="" width={580} />
        </div>
        <div id="about" className="about my-20 mx-auto w-4/5">
          <div className="textbook flex flex-row items-center cursor-pointer">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl">Электронный учебник</h3>
              <img src={book} alt="textbook" width={300} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                Учи слова, узнавай их перевод и произнощение в интерактивном
                современном учебнике
              </p>
              <Link to="/textbook">
                <button
                  type="button"
                  className="text-white text-xl bg-header transition duration-300 ease-in-out font-medium rounded-lg px-4 w-40 h-10 hover:bg-white hover:bg-violet-700 "
                >
                  Смотреть
                </button>
              </Link>
            </div>
          </div>
          <div className="audio flex flex-row-reverse items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl">Аудиовызов</h3>
              <img src={audio} alt="audio" width={300} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                Эта аудиотренировка больше похожа на игру, но при этом ты
                эффективно обучаешься языку!
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="text-white text-xl bg-header transition duration-300 ease-in-out font-medium rounded-lg px-4 w-40 h-10 hover:bg-white hover:bg-violet-700 self-end"
                >
                  Смотреть
                </button>
              </Link>
            </div>
          </div>
          <div className="sprint items-center flex flex-row cursor-pointer">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl">Спринт</h3>
              <img src={sprint} alt="sprint" width={300} />
            </div>
            <div className="flex flex-col">
              <div className="text-grey text-xl mb-5">
                Тренировка на скорость - узнавай больше переводов слова за
                ограниченное время
              </div>
              <Link to="/">
                <button
                  type="button"
                  className="text-white text-xl bg-header transition duration-300 ease-in-out font-medium rounded-lg px-4 w-40 h-10 hover:bg-white hover:bg-violet-700 justify-end"
                >
                  Смотреть
                </button>
              </Link>
            </div>
          </div>
          <div className="stats flex items-center flex-row-reverse cursor-pointer">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl">
                Твоя статистика и прогресс в личном кабинете
              </h3>
              <img src={stats} alt="statistics" width={300} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                С RSLang добно следить за своим прогрессом и не терять мотивацию
              </p>
              <Link to="/">
                <button
                  type="button"
                  className="text-white text-xl bg-header transition duration-300 ease-in-out font-medium rounded-lg px-4 w-40 h-10 hover:bg-white hover:bg-violet-700 self-end"
                >
                  Смотреть
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Main;
