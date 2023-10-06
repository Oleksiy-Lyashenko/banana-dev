import '../../styles/components/footer_page.scss';

export const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__block container">
            <ul className="footer__list footer__list--position-1-1">
              <li className="footer__item footer__list-title">company</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  about us
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  for devs
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  careers
                </a>
              </li>
            </ul>

            <ul className="footer__list footer__list--position-1-2">
              <li className="footer__item footer__list-title">resources</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  faq for business
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  faq for developers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  case studies
                </a>
              </li>
            </ul>

            <ul className="footer__list footer__list--position-1-3">
              <li className="footer__item footer__list-title">important links</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  job descriptions
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  hire developers
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  reviews
                </a>
              </li>
            </ul>

            <ul className="footer__list footer__list--position-1-4">
              <li className="footer__item footer__list-title">terms</li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  terms of use
                </a>
              </li>
              <li className="footer__item">
                <a href="/" className="footer__link">
                  privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom container">
          <img src="./images/top_page/header/logo.svg" alt="" className="footer__logo" />

          <h3 className="footer__copyright">© 2023 banan.dev</h3>
        </div>
      </div>
    </footer>
  );
};
