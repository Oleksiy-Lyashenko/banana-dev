import { Header } from '../components/Header';
import { FooterPage } from './FooterPage';
import { FormPage } from './FormPage';
import { MakeMoneyPage } from './MakeMoneyPage/MakeMoneyPage';
import { OurClients } from './OurClientsPage/OurClientsPage';
import { ProjectsPage } from './ProjectsPage';
import { StackPage } from './StackPage';
import { TopPage } from './TopPage';
import { WhatOffer } from './WhatOfferPage/WhatOfferPage';
import { WowFactorPage } from './WowFactorPage';

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <section className="main__content">
          <TopPage />

          <MakeMoneyPage />

          <WhatOffer />

          <OurClients />

          <WowFactorPage />

          <ProjectsPage />

          <StackPage />

          <FormPage />

          <FooterPage />
        </section>
      </main>
    </div>
  );
}

export default App;