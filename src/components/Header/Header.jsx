/* eslint-disable jsx-a11y/alt-text */
import '../../styles/components/header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__content container">
        <img src="./images/logo.svg" className="logo" />

        <div className="">
          <button className="header__button">inquire now</button>
        </div>
      </div>
    </header>
  );
}
