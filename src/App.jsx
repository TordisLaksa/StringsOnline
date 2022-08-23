import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/app/AppRouter';
import { Header } from "./components/Partials/Header/Header";
import { Footer } from "./components/Partials/Footer/Footer";
import './App.scss'
import { LeftNav } from './components/Partials/Nav/LeftNav';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <LeftNav />
          <section>
            <AppRouter></AppRouter>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
