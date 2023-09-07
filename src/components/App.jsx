import { Header } from './Header';
import { MakeMoneyPage } from './MakeMoneyPage/MakeMoneyPage';
import { TopPage } from './TopPage';

function App() {
  return (
    <div className="page">
      <Header />

      <main className='main'>
        <section className='main__content'>
          <TopPage />

          <MakeMoneyPage />
        </section>
      </main>
    </div>
  );
}

export default App;
