import { useSelector } from 'react-redux/es/exports';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Stat() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userName = useSelector((state) => state.auth.user.name);
  const userID = useSelector((state) => state.auth.user.userId);

  return (
    <>
      <Header />
      {!isAuth && (
        <div className="container mx-auto text-center mt-16 text-2xl font-medium  min-h-screen ">
          Авторизируйтесь что бы увидеть статистику
        </div>
      )}
      {isAuth && (
        <div className="container mx-auto flex flex-col  min-h-screen justify-center md:flex-row py-10">
          <div className="p-4 h-64 md:mt-16  rounded-2xl md:border border-borderGray md:shadow-xl">
            <div className="w-32 h-32 mx-auto opacity-50">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M256,31C131.7,31,31,131.7,31,256s100.7,225,225,225s225-100.7,225-225S380.3,31,256,31z M256,118.1
		c44.1,0,79.8,35.7,79.8,79.8s-35.7,79.8-79.8,79.8s-79.8-35.7-79.8-79.8S211.9,118.1,256,118.1z M256,430.2
		c-53.3,0-101-24.1-132.9-61.9c17.1-32.1,50.4-54.3,89.4-54.3c2.2,0,4.4,0.4,6.4,1c11.8,3.8,24.1,6.3,37.1,6.3s25.4-2.4,37.1-6.3
		c2.1-0.6,4.3-1,6.4-1c38.9,0,72.3,22.1,89.4,54.3C357,406.1,309.3,430.2,256,430.2z"
                  />
                </g>
              </svg>
            </div>
            <div className=" text-center">
              <div className="opacity-40">ID:</div>
              <div> {userID}</div>
              <div className="opacity-40">User:</div>
              <div> {userName}</div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-center font-medium text-2xl mb-4">
              Статистика
            </h2>
            <div className="flex justify-center flex-wrap px-10 flex-col items-center sm:flex-row">
              <div className="w-60 h-60 m-4 rounded-full p-10 bg-danger flex justify-center items-center shadow-md">
                <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center flex-col">
                  <div>Всего игр: </div>
                  <div className="font-bold text-2xl">340</div>
                </div>
              </div>
              <div className="w-60 h-60 m-4 rounded-full p-10 bg-footer flex justify-center items-center shadow-md">
                <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center flex-col text-center">
                  <div>Максимум без ощибок: </div>
                  <div className="font-bold text-2xl">340</div>
                </div>
              </div>
              <div className="w-60 h-60 m-4 rounded-full p-10 bg-success flex justify-center items-center shadow-md">
                <div className="w-40 h-40 rounded-full bg-white flex justify-center items-center flex-col">
                  <div>Слов выучено: </div>
                  <div className="font-bold text-2xl">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Stat;
