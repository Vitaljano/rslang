import Header from '../components/Header';
import MainScreen from '../components/SprintGame/MainScreen';

function SprintGame() {
  return (
    <>
      <Header />
      <section className="bg-sprint h-screen">
        <div className="container mx-auto">
          <MainScreen />
        </div>
      </section>
    </>
  );
}

export default SprintGame;
