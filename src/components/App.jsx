import { Header } from './Header';
import { TopPage } from './TopPage';

function App() {
  return (
    <div className="page">
      <Header />

      <main className='main'>
        <section className='main__content'>
          <TopPage />
        </section>
      </main>
    </div>
  );
}

export default App;
