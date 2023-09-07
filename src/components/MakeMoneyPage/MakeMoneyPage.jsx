import '../../styles/components/make_money.scss';

export function MakeMoneyPage() {
  return (
    <div className="make-money">
      <div className="make-money__content container">
        <img src="./images/make_money_page/banan_img.svg" alt="" className="make-money__banan-bg" />
        <img src="./images/make_money_page/dev_img.svg" alt="" className="make-money__dev-bg" />

        <h2 className="main__page-title make-money__title">
          Start making <br /> a lot of profit
        </h2>

        <div className="make-money__block">
          <div className="make-money__step make-money__step--1">
            <img src="./images/make_money_page/img_1.svg" alt="" className="make-money__img" />
            <p className="make-money__step-info">
              You stuck with your bussines and stopped growing. You stuck with your bussines and
              stopped growing
            </p>
          </div>

          <div className="make-money__step make-money__step--2">
            <img
              src="./images/make_money_page/img_2.svg"
              alt=""
              className="make-money__img make-money__img"
            />
            <p className="make-money__step-info make-money__step-info--2">
              You ask our Banan.dev to take care of everything. You ask our Banan.dev to take care
              of everything
            </p>
          </div>
          <div className="make-money__step make-money__step--3">
            <img src="./images/make_money_page/img_3.svg" alt="" className="make-money__img" />
            <p className="make-money__step-info">
              You ask our Banan.dev to take care of everything. You ask our Banan.dev to take care
              of everything
            </p>
          </div>

          <button className="make-money__button make-money__button--position">
            push the button
          </button>
        </div>
      </div>
    </div>
  );
}
