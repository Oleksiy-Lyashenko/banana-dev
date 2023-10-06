/* eslint-disable react/jsx-no-comment-textnodes */
import { NavLink } from 'react-router-dom';
import { Header } from '../../components/Header';
import { FooterPage } from '../FooterPage';
import './main.scss'
import { useEffect } from 'react';

export default function Reviews() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="reviews">
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
                  Reviews
                </NavLink>
              </li>
            </ul>

            <div className="portfolio-top__text-block">
              <h2 className="top-page__main-text top-page__main-text--yellow portfolio-top__main-text--position">
                reviews
              </h2>
              <p className="top-page__sub-text">
                Check out the works that we have created for our clients, meeting their business
                goals and connecting their activity and the digital world.
              </p>
            </div>
          </div>
        </section>

        <section className="reviews-main">
          <div className="reviews-main__content container">
            <div className="our-clients__card">
              <div className="our-clients__top">
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
              </div>

              <p className="our-clients__review">
                I am extremely impressed with the services provided by your web studio. The team
                took the time to understand my business needs and delivered a website that not only
                looks amazing
              </p>

              <div className="our-clients__review-bottom">
                <img
                  src="./images/our_clients_page/client_img.png"
                  alt=""
                  className="our-clients__client-img"
                />

                <div className="our-clients__review-bottom-info">
                  <span className="our-clients__name">Mitchel Gronyx</span>

                  <div className="our-clients__position">// founder of Microssoft, UK</div>
                </div>
              </div>
            </div>

            <div className="our-clients__card reviews-main__review--doshed-bg reviews-main__review--position-2">
              <div className="our-clients__top">
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
              </div>

              <p className="our-clients__review">
                I can't recommend your web studio enough! The professionalism, expertise, and
                attention to detail displayed by your team are exceptional. From the initial
                consultation to the final delivery...
              </p>

              <div className="our-clients__review-bottom">
                <img
                  src="./images/our_clients_page/client_img.png"
                  alt=""
                  className="our-clients__client-img"
                />

                <div className="our-clients__review-bottom-info">
                  <span className="our-clients__name">Mitchel Gronyx</span>

                  <div className="our-clients__position">// founder of Microssoft, UK</div>
                </div>
              </div>
            </div>

            <div className="our-clients__card reviews-main__review--doshed-bg reviews-main__review--position-1">
              <div className="our-clients__top">
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
              </div>

              <p className="our-clients__review">
                I’ve worked with some incredible devs in my career, but the experience I am having
                with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful
                to the team!
              </p>

              <div className="our-clients__review-bottom">
                <img
                  src="./images/our_clients_page/client_img.png"
                  alt=""
                  className="our-clients__client-img"
                />

                <div className="our-clients__review-bottom-info">
                  <span className="our-clients__name">Mitchel Gronyx</span>

                  <div className="our-clients__position">// founder of Microssoft, UK</div>
                </div>
              </div>
            </div>

            <div className="our-clients__card">
              <div className="our-clients__top">
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
                <img
                  src="./images/our_clients_page/star.svg"
                  alt=""
                  className="our-clients__star"
                />
              </div>

              <p className="our-clients__review">
                I’ve worked with some incredible devs in my career, but the experience I am having
                with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful
                to the team!
              </p>

              <div className="our-clients__review-bottom">
                <img
                  src="./images/our_clients_page/client_img.png"
                  alt=""
                  className="our-clients__client-img"
                />

                <div className="our-clients__review-bottom-info">
                  <span className="our-clients__name">Mitchel Gronyx</span>

                  <div className="our-clients__position">// founder of Microssoft, UK</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterPage />
      </main>
    </div>
  );
}
