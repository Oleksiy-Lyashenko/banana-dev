/* eslint-disable jsx-a11y/alt-text */
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
          <img src="./images/logo.svg" className="logo" />
        </div>

        <div className="header__right-block">
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
