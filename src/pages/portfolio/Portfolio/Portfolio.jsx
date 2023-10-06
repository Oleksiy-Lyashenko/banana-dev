import { NavLink } from 'react-router-dom';
import { Header } from '../../../components/Header';
import '../../../styles/pages/portfolio/main.scss';
import { FooterPage } from '../../FooterPage';
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="portfolio">
      <Header />

      <main className="main">
        <section className="portfilio-top">
          <div className="portfolio-top__content container">
            <ul className="pocketbook-top__list portfolio-top__list--position">
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Home
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link pocketbook-top__link--choosen">
                  Portfolio
                </NavLink>
              </li>
            </ul>

            <div className="portfolio-top__text-block">
              <h2 className="top-page__main-text top-page__main-text--yellow portfolio-top__main-text--position">
                portfolio
              </h2>
              <p className="top-page__sub-text">
                Check out the works that we have created for our clients, meeting their business
                goals and connecting their activity and the digital world.
              </p>
            </div>

            <div className="portfolio-top__filter-block">
              <div className="portfolio-top__filter-block__left">
                <div className="portfolio-top__filter-block__filter">
                  <span className="portfolio-top__filter-block__title">Technology</span>
                  <img
                    src="./images/portfolio/arrow_img.svg"
                    alt=""
                    srcset=""
                    className="portfolio-top__filter-block__img"
                  />
                </div>

                <div className="portfolio-top__filter-block__filter">
                  <span className="portfolio-top__filter-block__title">Platform</span>
                  <img
                    src="./images/portfolio/arrow_img.svg"
                    alt=""
                    srcset=""
                    className="portfolio-top__filter-block__img"
                  />
                </div>

                <div className="portfolio-top__filter-block__filter">
                  <span className="portfolio-top__filter-block__title">Development</span>
                  <img
                    src="./images/portfolio/arrow_img.svg"
                    alt=""
                    srcset=""
                    className="portfolio-top__filter-block__img"
                  />
                </div>
              </div>
              <div className="portfolio-top__filter-block__right">
                <div className="portfolio-top__button">clear all</div>
                <div className="portfolio-top__button portfolio-top__button--violet">
                  apply tags
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-main">
          <div className="portfolio-main__content container">
            <NavLink to='/pocketbook' className="portfolio-main__project">
              <h4 className="portfolio-main__project__title">Mobile application</h4>

              <img
                src="./images/clients/pocketbook/logo.svg"
                alt=""
                className="portfolio-main__project__img"
              />

              <div className="slider-projects__bottom">
                <div className="slider-projects__direction">Business</div>

                <div className="slider-projects__direction">Redesign</div>

                <div className="slider-projects__direction">Web development</div>

                <div className="slider-projects__direction">E-commerce</div>
              </div>
            </NavLink>
          </div>
        </section>

        <FooterPage />
      </main>
    </div>
  );
}
