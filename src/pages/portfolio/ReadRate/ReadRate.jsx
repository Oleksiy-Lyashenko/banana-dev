/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './main.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Stack } from './components/Stack';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';

export default function ReadRate() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="readrate">
      <Header buttonClass="header__button-pocketbook" headerClass="header--pocketbook" />

      <main className="main">
        <section className="readrate-top">
          <div className="readrate__top-bg"></div>

          <div className="readrate-top__content container">
            <ul className="readrate-top__list">
              <li className="readrate-top__item">
                <NavLink to="/" className="readrate-top__link">
                  Home
                </NavLink>
              </li>
              <li className="readrate-top__item">
                <span className="readrate-top__line">-</span>
              </li>
              <li className="readrate-top__item">
                <NavLink to="/" className="readrate-top__link">
                  Portfolio
                </NavLink>
              </li>
              <li className="readrate-top__item">
                <span className="readrate-top__line">-</span>
              </li>
              <li className="readrate-top__item">
                <NavLink
                  to="/readrate"
                  className="readrate-top__link pocketbook-top__link--choosen">
                  ReadRate
                </NavLink>
              </li>
            </ul>

            <div className="readrate-top__text-block">
              <h2 className="page-title-pocketbook pocketbook-top__main-text">
                <span className="page-title-pocketbook--yellow">Readrate.com</span>
                <br />
                website redesign
              </h2>
              <p className="readrate-top__sub-text">
                wasting time and money hiring delinquent devs? get devotees to build your vision –
                diabolically fast wasting time and money hiring delinquent devs? get devotees to
                build your vision – diabolically fast
              </p>

              <div className="readrate-top__tools">
                <span className="readrate-top__tool">Java</span>
                <span className="readrate-top__tool">Business</span>
                <span className="readrate-top__tool">Redesign</span>
                <span className="readrate-top__tool">Web development</span>
                <span className="readrate-top__tool">E-commerce</span>
                <span className="readrate-top__tool">UI/UX design</span>
              </div>

              <img
                src="./images/clients/readrate/logo.svg"
                alt=""
                srcset=""
                className="readrate-top__logo--mobile"
              />

              <div className="readrate-top__sites">
                <a href="#" className="readrate-top__site">
                  <img
                    src="./images/clients/pocketbook/web_icon.svg"
                    alt=""
                    className="readrate-top__site__img"
                  />

                  <span className="readrate-top__site__text">Website</span>
                </a>
              </div>
            </div>

            <img
              src="./images/clients/readrate/logo.svg"
              alt=""
              srcset=""
              className="readrate-top__logo"
            />
          </div>

          <div className="home-top__our-client container">
            <div className="readrate-top__info">
              <img src="./images/top_page/tape/left-tape.svg" className="readrate-top__left-tape" />
              <img
                src="./images/top_page/tape/right-tape.svg"
                className="readrate-top__right-tape"
              />
              <div className="readrate-top__block-info">
                <div className="readrate-top__info-block">
                  <span className="readrate-top__info-block__type">industry</span>
                  <span className="readrate-top__info-block__description">
                    Social <br className="readrate-top__br" />
                    media
                  </span>
                </div>
                <div className="readrate-top__line"></div>
                <div className="readrate-top__info-block">
                  <span className="readrate-top__info-block__type">team</span>
                  <span className="readrate-top__info-block__description">5 members</span>
                </div>
                <div className="readrate-top__line"></div>
                <div className="readrate-top__info-block">
                  <span className="readrate-top__info-block__type">project state</span>
                  <span className="readrate-top__info-block__description">Finalised</span>
                </div>
                <div className="readrate-top__line"></div>
                <div className="readrate-top__info-block">
                  <span className="readrate-top__info-block__type">project state</span>
                  <span className="readrate-top__info-block__description">Swetzerland</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="readrate-about">
          <div className="readrate-about__content container">
            <div className="readrate-about__top">
              <div className="readrate-about__block">
                <h2 className="page-title-pocketbook page-title-pocketbook--yellow page-title-pocketbook--about pocketbook-about__title">
                  about project
                </h2>
                <p className="readrate-about__text">
                  Kör Teknologi AS decided to build their first educational platform for Norwegian
                  drivers, they trusted us with the product’s development. Their main goal was to
                  create MVP (Minimum Viable Product), then go to users with the real app and test
                  it
                </p>
              </div>

              <div className="readrate-about__block">
                <h2 className="page-title-pocketbook page-title-pocketbook--pink page-title-pocketbook--about pocketbook-about__title">
                  about client
                </h2>
                <p className="readrate-about__text">
                  Kör Teknologi AS decided to build their first educational platform for Norwegian
                  drivers, they trusted us with the product’s development. Their main goal was to
                  create MVP (Minimum Viable Product), then go to users with the real app and test
                  it
                </p>
              </div>
            </div>

            <div className="readrate-about__main">
              <img
                src="./images/clients/pocketbook/about_top_shadow_img.png"
                alt=""
                srcset=""
                className="readrate-about__top-shadow"
              />

              <img
                src="./images/clients/pocketbook/about_bottom_shadow_img.png"
                alt=""
                srcset=""
                className="readrate-about__bottom-shadow"
              />

              <div className="readrate-about__img-block">
                <img
                  src="./images/clients/pocketbook/about_img.svg"
                  alt=""
                  className="readrate-about__img"
                />
              </div>
            </div>

            <div className="readrate-about__bottom">
              <img
                src="./images/our_clients_page/passive_left_arrow.svg"
                alt=""
                className="readrate-about__arrow-img"
              />
              <img
                src="./images/our_clients_page/active_right_arrow.svg"
                alt=""
                className="readrate-about__arrow-img"
              />
            </div>
          </div>
        </section>

        <section className="readrate-goal">
          <div className="readrate-goal__content container">
            <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-goal__title">
              project goals
            </h2>

            <div className="readrate-goal__main">
              <div className="readrate-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_1.svg"
                  alt=""
                  srcset=""
                  className="readrate-goal__img"
                />

                <span className="readrate-goal__step">1. Create a responsive online store</span>

                <span className="readrate-goal__text">
                  We aimed to create an inclusive and responsive web design to ensure fast-loading &
                  smooth experience on all devices.
                </span>
              </div>

              <div className="readrate-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_2.svg"
                  alt=""
                  srcset=""
                  className="readrate-goal__img"
                />

                <span className="readrate-goal__step pocketbook-goal__text--2">
                  2. Impress with efficient UX/UI design
                </span>

                <span className="readrate-goal__text pocketbook-goal__text--2">
                  We strove to introduce stunning UI/UX solutions within simple yet effective car
                  dealer’s website design.
                </span>
              </div>

              <div className="readrate-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_3.svg"
                  alt=""
                  srcset=""
                  className="readrate-goal__img"
                />

                <span className="readrate-goal__step">3. Deliver conversion-focused design</span>

                <span className="readrate-goal__text">
                  We improved the website’s conversion rate with the help of call-to-action buttons,
                  logical structure, advanced search functionality, comfortable menus & much more.
                </span>
              </div>

              <div className="readrate-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_4.svg"
                  alt=""
                  srcset=""
                  className="readrate-goal__img pocketbook-goal__img--4"
                />

                <span className="readrate-goal__step pocketbook-goal__text--2">
                  4. Build a functional admin panel
                </span>

                <span className="readrate-goal__text pocketbook-goal__text--2">
                  Our goal was to create a functional and user-friendly admin panel to allow
                  managing content manually (for website administrators).
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="readrate-responsive">
          <div className="readrate-responsive__content container">
            <div className="readrate-responsive__text-block">
              <h2 className="page-title-pocketbook page-title-pocketbook--yellow pocketbook-responsive__title">
                responsive <br /> design
              </h2>

              <div className="readrate-responsive__img-block pocketbook-responsive__img-block--mobile">
                <div className="readrate-responsive__block-img">
                  <img
                    src="./images/clients/pocketbook/responsive_img.svg"
                    alt=""
                    srcset=""
                    className="readrate-responsive__img"
                  />
                </div>
              </div>

              <div className="readrate-responsive__list">
                <div className="readrate-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="readrate-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="readrate-responsive__list-text">
                    Streamlined Layout: To optimize the layout for smaller screens, I carefully
                    restructured the content and prioritized the most important elements.
                  </span>
                </div>

                <div className="readrate-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="readrate-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="readrate-responsive__list-text">
                    Responsive Typography: I paid special attention to typography to ensure
                    legibility and readability on smaller screens.
                  </span>
                </div>

                <div className="readrate-responsive__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="readrate-responsive__list-img pocketbook-responsive__position-img"
                  />

                  <span className="readrate-responsive__list-text">
                    Mobile-Friendly Navigation: I implemented a mobile-friendly navigation system
                    that is intuitive and easy to use.
                  </span>
                </div>
              </div>
            </div>

            <div className="readrate-responsive__img-block pocketbook-responsive__img-block--desktop">
              <div className="readrate-responsive__block-img">
                <img
                  src="./images/clients/pocketbook/responsive_img.svg"
                  alt=""
                  srcset=""
                  className="readrate-responsive__img"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="readrate-branding">
          <div className="readrate-branding__content container">
            <div className="readrate-about__block readrate-branding__top">
              <h2 className="page-title-readrate page-title-readrate--yellow readrate-branding__title">
                branding
              </h2>
              <p className="readrate-branding__text">
                Dived into UX, we created the Bloss logo, typography, identity, and a user-friendly
                engaging web design.
              </p>
            </div>

            <img
              src="./images/clients/readrate/logo_gray.svg"
              alt=""
              srcset=""
              className="readrate-branding__img"
            />

            <div className="readrate-branding__main">
              <div className="readrate-branding__colors-block">
                <h4 className="readrate-branding__colors-block__title">colours</h4>
                <img
                  src="./images/clients/pocketbook/branding_colors_img.svg"
                  alt=""
                  srcset=""
                  className="readrate-branding__img-colours"
                />
              </div>

              <div className="readrate-branding__typography">
                <div className="readrate-branding__typography__top">
                  <h4 className="readrate-branding__colors-block__title readrate-branding__typography__subtitle">
                    typography
                  </h4>
                  <img
                    src="./images/clients/pocketbook/colors/typo_img.svg"
                    alt=""
                    srcset=""
                    className="readrate-branding__typography__img"
                  />
                </div>
                <img
                  src="./images/clients/pocketbook/branding_typography_img.svg"
                  alt=""
                  srcset=""
                  className="readrate-branding__img-colours"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="readrate-mobile-app">
          <div className="readrate-mobile-app__content container">
            <div className="readrate-mobile-app__img-block readrate-mobile-app__img-block--desktop">
              <img
                src="./images/clients/pocketbook/mobile_app_img.png"
                alt=""
                srcset=""
                className="readrate-mobile-app__img"
              />
            </div>

            <div className="readrate-mobile-app__text-block">
              <h2 className="page-title-readrate page-title-readrate--yellow readrate-mobile-app__title">
                mobile app
              </h2>
              <div className="readrate-mobile-app__img-block readrate-mobile-app__img-block--mobile">
                <img
                  src="./images/clients/pocketbook/mobile_app_img.svg"
                  alt=""
                  srcset=""
                  className="readrate-mobile-app__img"
                />
              </div>
              <p className="readrate-mobile-app__sub-text readrate-mobile-app__text-block--position">
                We placed a strong emphasis on understanding the needs and preferences of PocketBook
                users. Through extensive research and user testing, we gained valuable insights into
                their requirements, pain points, and features.
                <br />
                <br />
                Moreover, we integrated a dark mode feature into the application, allowing users to
                switch between light and dark color schemes according to their preference.
              </p>
            </div>
          </div>
        </section>

        <Stack />

        <section className="readrate-result">
          <div className="readrate-result__content container">
            <div className="readrate-result__text-content">
              <h2 className="page-title-readrate page-title-readrate--yellow readrate-result__title">
                result
              </h2>
              <img
                src="./images/clients/readrate/result_img.svg"
                alt=""
                srcset=""
                className="readrate-result__img readrate-result__img--mobile"
              />
              <p className="readrate-result__text-block">
                The redesigned online store played a pivotal role in expanding the company's
                presence across multiple countries. By implementing a modern and user-friendly
                interface, we created a seamless shopping experience for customers worldwide.
                <br />
                <br />
                The combination of the redesigned online store and the mobile app proved to be a
                winning formula, resulting in a substantial boost in sales figures. By optimizing
                the user experience, streamlining the purchasing process, and integrating secure
                payment gateways, we successfully converted visits into transactions, leading to a
                remarkable increase in revenue.
              </p>
            </div>

            <div className="readrate-result__block-content readrate-result__block-content--desktop">
              <img
                src="./images/clients/readrate/result_img.svg"
                alt=""
                srcset=""
                className="readrate-result__img readrate-result__img--desktop"
              />
            </div>
          </div>
        </section>

        <section className="readrate-review">
          <div className="readrate-review__content container">
            <div className="readrate-review__img-block readrate-review__img-block--desktop">
              <img
                src="./images/clients/pocketbook/client_img.png"
                alt=""
                srcset=""
                className="readrate-review__img"
              />
            </div>

            <div className="readrate-review__text-block">
              <h2 className="page-title-readrate page-title-readrate--yellow readrate-review__title readrate-review__title--position">
                client’s <br /> review
              </h2>

              <div className="readrate-review__img-block readrate-review__img-block--mobile">
                <img
                  src="./images/clients/pocketbook/client_img.png"
                  alt=""
                  srcset=""
                  className="readrate-review__img"
                />
              </div>

              <span className="readrate-review__name">Mitchel Gronyx</span>
              <span className="readrate-review__position">// CEO of Pocketbook</span>

              <p className="readrate-review__sub-text">
                I am absolutely blown away by the exceptional work done by BANAN.DEV. The redesign
                of their online store and the development of their mobile app have completely
                transformed my shopping experience. Not only did they create a visually stunning and
                user-friendly website, but the mobile app takes convenience to a whole new level.
                <br />
                <br />
                Thanks to their efforts, I now have access to a wider range of products and can shop
                from anywhere at any time. The seamless navigation, intuitive interface, and secure
                payment options have made my purchasing process a breeze. I no longer have to worry
                about missing out on great deals or limited-time offers because everything is right
                at my fingertips.
              </p>
            </div>
          </div>
        </section>

        <Form title="Ready for a Quote?" />
      </main>

      <Footer />
    </div>
  );
}
