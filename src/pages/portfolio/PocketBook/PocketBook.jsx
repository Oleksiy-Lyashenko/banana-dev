/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../../styles/pages/clients/pocketbook/main.scss';
import '../../../styles/pages/clients/pocketbook/header.scss';
import { Header } from './components/Header';
import { FormPage } from '../../FormPage';
import { FooterPage } from '../../FooterPage';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function PocketBook() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="pocketbook">
      <Header buttonClass="header__button-pocketbook" />

      <main className="main">
        <section className="pocketbook-top">
          <div className="pocketbook__top-bg"></div>

          <div className="pocketbook-top__content container">
            <ul className="pocketbook-top__list">
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Home
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink to="/" className="pocketbook-top__link">
                  Portfolio
                </NavLink>
              </li>
              <li className="pocketbook-top__item">-</li>
              <li className="pocketbook-top__item">
                <NavLink
                  to="/pocketbook"
                  className="pocketbook-top__link pocketbook-top__link--choosen">
                  Pocketbook
                </NavLink>
              </li>
            </ul>

            <div className="top-page__text-block pocketbook-top__text-block">
              <h2 className="top-page__main-text">
                <span className="top-page__main-text--yellow">Pocketbook</span>
                <br />
                store Redesign
              </h2>
              <p className="top-page__sub-text">
                wasting time and money hiring delinquent devs? get devotees to build your vision –
                diabolically fast wasting time and money hiring delinquent devs? get devotees to
                build your vision – diabolically fast
              </p>

              <div className="pocketbook-top__tools">
                <span className="pocketbook-top__tool">Java</span>
                <span className="pocketbook-top__tool">Business</span>
                <span className="pocketbook-top__tool">Redesign</span>
                <span className="pocketbook-top__tool">Web development</span>
                <span className="pocketbook-top__tool">E-commerce</span>
                <span className="pocketbook-top__tool">UI/UX design</span>
              </div>

              <div className="pocketbook-top__sites">
                <a href="#" className="pocketbook-top__site">
                  <img src="./images/clients/pocketbook/apple_icon.svg" alt="" />

                  <span className="pocketbook-top__site__text">App Store</span>
                </a>
                <a href="#" className="pocketbook-top__site">
                  <img src="./images/clients/pocketbook/web_icon.svg" alt="" />

                  <span className="pocketbook-top__site__text">Website</span>
                </a>
                <a href="#" className="pocketbook-top__site">
                  <img src="./images/clients/pocketbook/google_icon.svg" alt="" />

                  <span className="pocketbook-top__site__text">App Store</span>
                </a>
              </div>
            </div>

            <img
              src="./images/clients/pocketbook/logo.svg"
              alt=""
              srcset=""
              className="pocketbook-top__logo"
            />
          </div>

          <img
            src="./images/clients/pocketbook/bottom_shadow_img.png"
            alt=""
            srcset=""
            className="pocketbook-top__bottom-shadow"
          />

          <div className="our-client container">
            <div className="our-client__content pocketbook-top__info">
              <img src="./images/top_page/tape/left-tape.svg" className="our-client__left-tape" />
              <img
                src="./images/top_page/tape/right-tape.svg"
                className="our-client__right-tape"
              />

              <div className="our-client__block-img pocketbook-top__block-info">
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">industry</span>
                  <span className="pocketbook-top__info-block__description">
                    Online distribution
                  </span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">team</span>
                  <span className="pocketbook-top__info-block__description">5 members</span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">project state</span>
                  <span className="pocketbook-top__info-block__description">Finalised</span>
                </div>
                <div className="pocketbook-top__line"></div>
                <div className="pocketbook-top__info-block">
                  <span className="pocketbook-top__info-block__type">country</span>
                  <span className="pocketbook-top__info-block__description">Swetzerland</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-about">
          <div className="pocketbook-about__content container">
            <div className="pocketbook-about__top">
              <div className="pocketbook-about__block">
                <h2 className="top-page__main-text pocketbook-about__title">
                  <span className="top-page__main-text--yellow pocketbook-about__title">
                    about project
                  </span>
                </h2>
                <p className="top-page__sub-text pocketbook-about__text">
                  Kör Teknologi AS decided to build their first educational platform for Norwegian
                  drivers, they trusted us with the product’s development. Their main goal was to
                  create MVP (Minimum Viable Product), then go to users with the real app and test
                  it
                </p>
              </div>

              <div className="pocketbook-about__block">
                <h2 className="top-page__main-text pocketbook-about__title">
                  <span className="pocketbook-about__title pocketbook-about__title--pink">
                    about client
                  </span>
                </h2>
                <p className="top-page__sub-text pocketbook-about__text">
                  In a nutshell, Kör is the first digital school for drivers. The platform lets
                  users book driving programs & lessons online, keeps track of their progress, and
                  allows family & friends to be involved in the process.
                </p>
              </div>
            </div>

            <div className="pocketbook-about__main">
              <img
                src="./images/clients/pocketbook/about_top_shadow_img.png"
                alt=""
                srcset=""
                className="pocketbook-about__top-shadow"
              />

              <img
                src="./images/clients/pocketbook/about_bottom_shadow_img.png"
                alt=""
                srcset=""
                className="pocketbook-about__bottom-shadow"
              />

              <img
                src="./images/clients/pocketbook/about_img.png"
                alt=""
                className="pocketbook-about__img"
              />
            </div>

            <div className="pocketbook-about__bottom">
              <img
                src="./images/our_clients_page/passive_left_arrow.svg"
                alt=""
                className="pocketbook-about__arrow-img"
              />
              <img
                src="./images/our_clients_page/active_right_arrow.svg"
                alt=""
                className="pocketbook-about__arrow-img"
              />
            </div>
          </div>
        </section>

        <section className="pocketbook-goal">
          <div className="pocketbook-goal__content container">
            <h2 className="main__page-title pocketbook-goal__title">project goals</h2>

            <div className="pocketbook-goal__main">
              <div className="pocketbook-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_1.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">1. Create a responsive online store</span>

                <span className="pocketbook-goal__text">
                  We aimed to create an inclusive and responsive web design to ensure fast-loading &
                  smooth experience on all devices.
                </span>
              </div>

              <div className="pocketbook-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_2.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">
                  2. Impress with efficient UX/UI design
                </span>

                <span className="pocketbook-goal__text">
                  We strove to introduce stunning UI/UX solutions within simple yet effective car
                  dealer’s website design.
                </span>
              </div>

              <div className="pocketbook-goal__block">
                <img
                  src="./images/clients/pocketbook/goal_img_3.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">3. Deliver conversion-focused design</span>

                <span className="pocketbook-goal__text">
                  We improved the website’s conversion rate with the help of call-to-action buttons,
                  logical structure, advanced search functionality, comfortable menus & much more.
                </span>
              </div>

              <div className="pocketbook-goal__block pocketbook-goal__block--2">
                <img
                  src="./images/clients/pocketbook/goal_img_4.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-goal__img"
                />

                <span className="pocketbook-goal__step">4. Build a functional admin panel</span>

                <span className="pocketbook-goal__text">
                  Our goal was to create a functional and user-friendly admin panel to allow
                  managing content manually (for website administrators).
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-responsive">
          <div className="pocketbook-responsive__content container">
            <div className="pocketbook-responsive__text-block">
              <h2 className="main__page-title pocketbook-responsive__title">
                responsive <br /> design
              </h2>

              <div className="what-offer__list">
                <div className="what-offer__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="what-offer__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Streamlined Layout: To optimize the layout for smaller screens, I carefully
                    restructured the content and prioritized the most important elements.
                  </span>
                </div>

                <div className="what-offer__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="what-offer__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Responsive Typography: I paid special attention to typography to ensure
                    legibility and readability on smaller screens.
                  </span>
                </div>

                <div className="what-offer__proposal">
                  <img
                    src="./images/what_offer_page/banan_list.svg"
                    alt=""
                    className="what-offer__list-img pocketbook-responsive__position-img"
                  />

                  <span className="pocketbook-responsive__list-text">
                    Mobile-Friendly Navigation: I implemented a mobile-friendly navigation system
                    that is intuitive and easy to use.
                  </span>
                </div>
              </div>
            </div>

            <div className="pocketbook-responsive__img-block">
              <div>
                <div className="pocketbook-responsive__tab-img-block">
                  <img
                    src="./images/clients/pocketbook/tab_img.png"
                    alt=""
                    srcset=""
                    className="pocketbook-responsive__tab-img"
                  />
                </div>
                <div className="pocketbook-responsive__phone-img-block">
                  <div className="pocketbook-responsive__phone-img-border">
                    <img
                      src="./images/clients/pocketbook/phone_responsive_img.png"
                      alt=""
                      srcset=""
                      className="pocketbook-responsive__phone-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-branding">
          <div className="pocketbook-branding__content container">
            <div className="pocketbook-about__block pocketbook-branding__top">
              <h2 className="top-page__main-text top-page__main-text--yellow pocketbook-branding__title">
                branding
              </h2>
              <p className="top-page__sub-text pocketbook-branding__text">
                Dived into UX, we created the Bloss logo, typography, identity, and a user-friendly
                engaging web design.
              </p>
            </div>

            <img
              src="./images/clients/pocketbook/icon_branding_img.png"
              alt=""
              srcset=""
              className="pocketbook-branding__img"
            />

            <div className="pocketbook-branding__main">
              <div className="pocketbook-branding__colors-block">
                <h4 className="pocketbook-branding__colors-block__title">colors</h4>

                <div className="pocketbook-branding__colors">
                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_1_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_2_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_3_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_4_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_5_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_6_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_7_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_8_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_9_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>

                  <div className="pocketbook-branding__color">
                    <img
                      src="./images/clients/pocketbook/colors/color_10_img.svg"
                      alt=""
                      srcset=""
                      className="pocketbook-branding__color__img"
                    />

                    <h6 className="pocketbook-branding__color__number">#5578AD</h6>
                  </div>
                </div>
              </div>

              <div className="pocketbook-branding__typography">
                <div className="pocketbook-branding__typography__top">
                  <h4 className="pocketbook-branding__colors-block__title pocketbook-branding__typography__subtitle">
                    typography
                  </h4>
                  <img
                    src="./images/clients/pocketbook/colors/typo_img.svg"
                    alt=""
                    srcset=""
                    className="pocketbook-branding__typography__top__img"
                  />
                </div>

                <div className="pocketbook-branding__typography__bottom">
                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--1">
                      Headline 1
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--1">
                      48 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--2">
                      Headline 2
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--2">
                      32 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--3">
                      Headline 3
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--3">
                      23 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--4">
                      Text 18R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--4">
                      18 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--5">
                      Button
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--5">
                      16 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--5">
                      Text 16R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--5">
                      16 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--6">
                      Text 14R
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--6">
                      14 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--7">
                      Text 12B
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--7">
                      12 px
                    </span>
                  </div>

                  <div className="pocketbook-branding__typography__headline">
                    <span className="pocketbook-branding__typography__title pocketbook-branding__typography__title--8">
                      Headline 2
                    </span>

                    <span className="pocketbook-branding__typography__size pocketbook-branding__typography__size--8">
                      32 px
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pocketbook-mobile-app">
          <div className="pocketbook-mobile-app__content container">
            <div className="pocketbook-mobile-app__img-block">
              <div className="pocketbook-mobile-app__block-img pocketbook-mobile-app__block-img--1">
                <img
                  src="./images/clients/pocketbook/mobile_app_img_1.png"
                  alt=""
                  srcset=""
                  className="pocketbook-mobile-app__img"
                />
              </div>
              <div className="pocketbook-mobile-app__block-img pocketbook-mobile-app__block-img--2">
                <img
                  src="./images/clients/pocketbook/mobile_app_img_2.png"
                  alt=""
                  srcset=""
                  className="pocketbook-mobile-app__img"
                />
              </div>
            </div>

            <div className="pocketbook-mobile-app__text-block">
              <h2 className="top-page__main-text top-page__main-text--yellow">mobile app</h2>
              <p className="top-page__sub-text pocketbook-mobile-app__text-block--position">
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

        <section className="stack-page pocketbook-stack">
          <div className="stack-page__content">
            <h2 className="main__page-title stack-page__title container"> tech stack</h2>

            <div className="grid-stack grid-stack__portfolio container--stack">
              <img
                src="./images/stack_page/top_shadow.png"
                alt=""
                className="grid-stack__top-shadow"
              />
              <img
                src="./images/stack_page/left_shadow.png"
                alt=""
                className="grid-stack__left-shadow"
              />
              <img
                src="./images/stack_page/right_shadow.png"
                alt=""
                className="grid-stack__right-shadow"
              />
              <img
                src="./images/stack_page/bottom_shadow.png"
                alt=""
                className="grid-stack__bottom-shadow"
              />

              {/* row 1 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-1-1"></span>
                <span className="grid-stack__direction grid-stack__field--position-1-2_3"></span>
                <span className="grid-stack__field grid-stack__field--position-1-4"></span>
                <span className="grid-stack__field grid-stack__field--position-1-5"></span>
                <span className="grid-stack__field grid-stack__field--position-1-6_7"></span>
                <span className="grid-stack__field grid-stack__field--position-1-8"></span>
                <span className="grid-stack__direction grid-stack__field--position-1-9_10"></span>
                <span className="grid-stack__field grid-stack__field--position-1-11"></span>
                <span className="grid-stack__field grid-stack__field--position-1-12"></span>
                <span className="grid-stack__field grid-stack__field--position-1-13_14"></span>
                <span className="grid-stack__field grid-stack__field--position-1-15"></span>
              </>

              {/* row 2 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-2-1"></span>
                <span className="grid-stack__direction grid-stack__field--position-2-2_3">
                  UI/UX Design
                </span>
                <span className="grid-stack__field grid-stack__field--position-2-4"></span>
                <span className="grid-stack__field grid-stack__field--position-2-5"></span>
                <span className="grid-stack__field grid-stack__field--position-2-6_7"></span>
                <span className="grid-stack__field grid-stack__field--position-2-8"></span>
                <span className="grid-stack__direction grid-stack__field--position-2-9_10">
                  FrontEnd
                </span>
                <span className="grid-stack__field grid-stack__field--position-2-11"></span>
                <span className="grid-stack__field grid-stack__field--position-2-12"></span>
                <span className="grid-stack__field grid-stack__field--position-2-13_14"></span>
                <span className="grid-stack__field grid-stack__field--position-2-15"></span>
              </>

              {/* row 3 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-3-1"></span>
                <span className="grid-stack__direction grid-stack__field--position-3-2 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/figma_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-3-3_4 grid-stack__field--position-none-top-border">
                  Figma
                </span>

                <span className="grid-stack__field grid-stack__field--position-3-5 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/ai_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-3-6_7 grid-stack__field--position-none-top-border">
                  Ilustrator
                </span>

                <span className="grid-stack__field grid-stack__field--position-3-8 grid-stack__field--position-none-top-border"></span>

                <span className="grid-stack__field grid-stack__field--position-3-9 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/react_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-3-10_11 grid-stack__field--position-none-top-border">
                  React
                </span>

                <span className="grid-stack__field grid-stack__field--position-3-12 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/js_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-3-13_14 grid-stack__field--position-none-top-border">
                  JavaScript
                </span>
                <span className="grid-stack__field grid-stack__field--position-3-15"></span>
              </>

              {/* row 4 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-4-1"></span>
                <span className="grid-stack__field grid-stack__field--position-4-2 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/ae_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-4-3_4 grid-stack__field--position-none-top-border">
                  After Effects
                </span>

                <span className="grid-stack__field grid-stack__field--position-4-5 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/ps_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-4-6_7 grid-stack__field--position-none-top-border">
                  Photoshop
                </span>

                <span className="grid-stack__field grid-stack__field--position-4-8 grid-stack__field--position-none-top-border"></span>

                <span className="grid-stack__field grid-stack__field--position-4-9 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/html_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-4-10_11 grid-stack__field--position-none-top-border">
                  HTML
                </span>

                <span className="grid-stack__field grid-stack__field--position-4-12 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/css_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-4-13_14 grid-stack__field--position-none-top-border">
                  CSS
                </span>
                <span className="grid-stack__field grid-stack__field--position-4-15"></span>
              </>

              {/* row 5 */}
              {/* <>
                <span className="grid-stack__field grid-stack__field--position-5-1"></span>
                <span className="grid-stack__field grid-stack__field--position-5-2 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/ae_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-5-3_4 grid-stack__field--position-none-top-border">
                  Adobe Effects
                </span>

                <span className="grid-stack__field grid-stack__field--position-5-5 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/xd_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-5-6_7 grid-stack__field--position-none-top-border">
                  Adobe XD
                </span>

                <span className="grid-stack__field grid-stack__field--position-5-8 grid-stack__field--position-none-top-border"></span>

                <span className="grid-stack__field grid-stack__field--position-5-9 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/react_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-5-10_11 grid-stack__field--position-none-top-border">
                  React
                </span>

                <span className="grid-stack__field grid-stack__field--position-5-12 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-13_14 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-15"></span>
              </> */}

              {/* row 6 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-5-1"></span>
                <span className="grid-stack__direction grid-stack__field--position-5-2_3 grid-stack__field--position-none-top-border">
                  back-end
                </span>
                <span className="grid-stack__field grid-stack__field--position-5-4 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-5 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-6_7 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-8 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__direction grid-stack__field--position-5-9_10 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-10_11 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-12 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-13_14 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-5-15"></span>
              </>

              {/* row 7 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-6-1"></span>
                <span className="grid-stack__field grid-stack__field--position-6-2 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/firebase_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-6-3_4 grid-stack__field--position-none-top-border">
                  Firebase
                </span>

                <span className="grid-stack__field grid-stack__field--position-6-5 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/mongo_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-6-6_7 grid-stack__field--position-none-top-border">
                  Mongo DB
                </span>

                <span className="grid-stack__field grid-stack__field--position-6-8 grid-stack__field--position-none-top-border"></span>

                <span className="grid-stack__field grid-stack__field--position-6-9 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/node_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-6-10_11 grid-stack__field--position-none-top-border">
                  NodeJS
                </span>

                <span className="grid-stack__field grid-stack__field--position-6-12 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/mysql_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-6-13_14 grid-stack__field--position-none-top-border">
                  MySQL
                </span>
                <span className="grid-stack__field grid-stack__field--position-6-15"></span>
              </>

              {/* row 8 */}
              {/* <>
                <span className="grid-stack__field grid-stack__field--position-8-1"></span>
                <span className="grid-stack__field grid-stack__field--position-8-2 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/node_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-8-3_4 grid-stack__field--position-none-top-border">
                  NodeJS
                </span>

                <span className="grid-stack__field grid-stack__field--position-8-5 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/mysql_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-8-6_7 grid-stack__field--position-none-top-border">
                  MySQL
                </span>

                <span className="grid-stack__field grid-stack__field--position-8-8 grid-stack__field--position-none-top-border"></span>

                <span className="grid-stack__field grid-stack__field--position-8-9 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/swift_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-8-10_11 grid-stack__field--position-none-top-border">
                  Swift
                </span>

                <span className="grid-stack__field grid-stack__field--position-8-12 grid-stack__field--position-none-top-border">
                  <img
                    src="./images/stack_page/obj_logo.svg"
                    alt=""
                    className="grid-stack__logo-img"
                  />
                </span>
                <span className="grid-stack__field grid-stack__field--position-8-13_14 grid-stack__field--position-none-top-border">
                  Objective-C
                </span>
                <span className="grid-stack__field grid-stack__field--position-8-15"></span>
              </> */}

              {/* row 9 */}
              <>
                <span className="grid-stack__field grid-stack__field--position-7-1"></span>
                <span className="grid-stack__direction grid-stack__field--position-7-2 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-7-3_4 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__direction grid-stack__field--position-7-5 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-7-6_7 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__direction grid-stack__field--position-7-8 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__direction grid-stack__field--position-7-9 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-7-10_11 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__direction grid-stack__field--position-7-12 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-7-13_14 grid-stack__field--position-none-top-border"></span>
                <span className="grid-stack__field grid-stack__field--position-7-15"></span>
              </>

              {/* row 10 */}
              {/* <>
                <div className="grid-stack__field grid-stack__field--position-10-1"></div>
                <div className="grid-stack__field grid-stack__field--position-10-2"></div>
                <div className="grid-stack__field grid-stack__field--position-10-3_4"></div>
                <div className="grid-stack__field grid-stack__field--position-10-5"></div>
                <div className="grid-stack__field grid-stack__field--position-10-6_7"></div>
                <div className="grid-stack__field grid-stack__field--position-10-8"></div>
                <div className="grid-stack__field grid-stack__field--position-10-9"></div>
                <div className="grid-stack__field grid-stack__field--position-10-10_11"></div>
                <div className="grid-stack__field grid-stack__field--position-10-12"></div>
                <div className="grid-stack__field grid-stack__field--position-10-13_14"></div>
                <div className="grid-stack__field grid-stack__field--position-10-15"></div>
              </> */}

              {/* additional fields to tablet*/}
              {/* <>
                <div className="grid-stack__field grid-stack__field--position-add-6-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-7-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-8-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-9-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-13-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-14-1"></div>
                <div className="grid-stack__field grid-stack__field--position-add-15-1"></div>{' '}
              </> */}

              {/* additional fields to mobile */}
              {/* <>
                <div className="grid-stack__field grid-stack__field--position-mob-7-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-8-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-10-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-11-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-12-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-13-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-14-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-17-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-19-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-20-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-21-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-22-1"></div>
                <div className="grid-stack__field grid-stack__field--position-mob-23-1"></div>
              </> */}
            </div>
          </div>
        </section>

        <section className="pocketbook-result">
          <div className="pocketbook-result__content container">
            <div className="pocketbook-result__text-content">
              <h2 className="top-page__main-text top-page__main-text--yellow">result</h2>
              <p className="top-page__sub-text pocketbook-result__text-block">
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

            <div className="pocketbook-result__block-content">
              <div className="pocketbook-result__block-img pocketbook-result__block-img--1">
                <img
                  src="./images/clients/pocketbook/result_people_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-result__block-img__icon"
                />

                <span className="pocketbook-result__block-img__number">250K+</span>

                <span className="pocketbook-result__block-img__info">clients worldwide</span>
              </div>

              <div className="pocketbook-result__block-img pocketbook-result__block-img--2">
                <img
                  src="./images/clients/pocketbook/result_plane_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-result__block-img__icon"
                />

                <span className="pocketbook-result__block-img__number">76</span>

                <span className="pocketbook-result__block-img__info">countries</span>
              </div>

              <div className="pocketbook-result__block-img pocketbook-result__block-img--3">
                <img
                  src="./images/clients/pocketbook/result_stat_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-result__block-img__icon"
                />

                <span className="pocketbook-result__block-img__number">530%</span>

                <span className="pocketbook-result__block-img__info">growth</span>
              </div>

              <div className="pocketbook-result__block-img pocketbook-result__block-img--4">
                <img
                  src="./images/clients/pocketbook/result_dollar_img.svg"
                  alt=""
                  srcset=""
                  className="pocketbook-result__block-img__icon"
                />

                <span className="pocketbook-result__block-img__number">2M+</span>
                <span className="pocketbook-result__block-img__info">sold readers</span>
              </div>

              <img
                src="./images/clients/pocketbook/result_banana_img.svg"
                alt=""
                srcset=""
                className="pocketbook-result__block-img__banana-img"
              />
            </div>
          </div>
        </section>

        <section className="pocketbook-review">
          <div className="pocketbook-review__content container">
            <div className="pocketbook-review__img-block">
              <img
                src="./images/clients/pocketbook/client_img.png"
                alt=""
                srcset=""
                className="pocketbook-review__img"
              />
            </div>

            <div className="pocketbook-review__text-block">
              <h2 className="top-page__main-text top-page__main-text--yellow pocketbook-review__title pocketbook-review__title--position">
                client’s <br /> review
              </h2>

              <span className="pocketbook-review__name">Mitchel Gronyx</span>
              <span className="pocketbook-review__position">// founder of Microssoft, UK</span>

              <p className="top-page__sub-text pocketbook-review__text-block">
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

        <FormPage title="Need help with your business?" />

        <FooterPage />
      </main>
    </div>
  );
}
