/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';
import '../../styles/components/header.scss';

export function Header() {
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
              <NavLink to="/about-us" className="header__nav-link">
                About Us
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/portfolio" className="header__nav-link">
                Portfolio
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/reviews" className="header__nav-link">
                Reviews
              </NavLink>
            </li>
          </ul>
          <button className="header__button">inquire now</button>
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
