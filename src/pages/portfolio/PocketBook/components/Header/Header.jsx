/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import '../../../../../styles/pages/clients/pocketbook/header.scss';

export function Header({ buttonClass }) {
  return (
    <header className="header">
      <div className="header__content container">
        <div className="header__left-block">
          <img
            src="./images/top_page/header/menu_img.svg"
            alt=""
            className="header__menu-img header__menu-left"
          />
          <img src="./images/top_page/header/logo.svg" className="logo" />
        </div>

        <div className="header__right-block">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                About Us
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Portfolio
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Reviews
              </a>
            </li>
          </ul>
          <button className={`${buttonClass}`}>inquire now</button>
          <img
            src="./images/top_page/header/menu_img.svg"
            alt=""
            className="header__menu-img header__menu-right"
          />
        </div>
      </div>
    </header>
  );
}
