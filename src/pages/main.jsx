import './main.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col w-full p-4">
        <div className="my-0 w-4/5 mx-auto items-center  flex-col justify-between xl:flex-row startscreen flex flex-row ">
          <div className="startscreen-text flex flex-col order-2 xl:order-1 gap-8 md:w-2/4  mr-20">
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
          <img
            className="order-1 xl:order-2"
            src="start-screen.jpg"
            alt=""
            width={580}
          />
        </div>
        <div
          id="about"
          className="about flex flex-col gap-24 md:grid md:gap-4 my-20 mx-auto md:w-4/5"
        >
          <div className="textbook flex flex-row items-center cursor-pointer">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl p-2">Электронный учебник</h3>
              <img src="book.jpg" alt="textbook" width={300} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                Учи слова, узнавай их перевод и произношение в интерактивном
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
              <h3 className="text-action text-2xl p-2">Аудиовызов</h3>
              <img src="audio.jpg" alt="audio" width={300} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                Эта аудиотренировка больше похожа на игру где ты эффективно
                обучаешься языку!
              </p>
              <Link to="/audiogame">
                <button
                  type="button"
                  className="text-white text-xl bg-header transition duration-300 ease-in-out font-medium rounded-lg px-4 w-40 h-10 hover:bg-white hover:bg-violet-700 "
                >
                  Смотреть
                </button>
              </Link>
            </div>
          </div>
          <div className="sprint items-center flex flex-row cursor-pointer">
            <div className="flex flex-col items-center">
              <h3 className="text-action text-2xl p-2">Спринт</h3>
              <img src="sprint.jpg" alt="sprint" width={300} />
            </div>
            <div className="flex flex-col">
              <div className="text-grey text-xl mb-5">
                Тренировка на скорость - узнавай больше переводов слов за
                ограниченное время
              </div>
              <Link to="/sprint">
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
              <img src="stats.jpg" alt="statistics" width={250} />
            </div>
            <div className="flex flex-col">
              <p className="text-grey text-xl mb-5">
                С RSLang добно следить за своим прогрессом и не терять мотивацию
              </p>
              <Link to="/stat">
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
      <div className="team  text-action mt-4">
        <h3 className="text-4xl">Наша команда</h3>
        <div className="vit">
          <img
            className="rounded-full"
            src="programmer.jpg"
            alt=""
            width={200}
          />
          <div className="caption">
            <a
              href="https://github.com/Vitaljano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Виталий Лазаревич</b>
            </a>
            <br />
            <b>Team-Lead</b>
            <br />
            Организация командной разработки
            <br />
            Игра Спринт
          </div>
        </div>

        <div className="dar">
          <img
            className="rounded-full ml-30"
            src="dasha.jpg"
            alt=""
            width={200}
          />

          <div className="caption">
            <a
              href="https://github.com/dariavenskaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Дарья Венская</b>
            </a>
            <br />
            Дизайн приложения
            <br />
            Игра Аудиовызов
          </div>
        </div>

        <div className="den">
          <img
            className="rounded-full"
            src="programmer2.jpg"
            alt=""
            width={200}
          />
          <div className="caption">
            <a
              href="https://github.com/Denhope"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Денис Кавальчук</b>
            </a>
            <br />
            Разработка учебника
            <br />
            Авторизация
            <br />
            Бизнес-логика приложения
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Main;
