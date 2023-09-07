import '../../styles/components/what_offer.scss';

export function WhatOffer() {
  return (
    <div className="what-offer">
      <div className="what-offer__content container">
        <h2 className="main__page-title what-offer__title">What we offer</h2>

        <div className="what-offer__block">
          <div className="what-offer__card what-offer__card--1">
            <img src="./images/what_offer/img_1.svg" alt="" className="what-offer__img" />

            <h4 className="what-offer__card-title">design & development</h4>

            <p className="what-offer__card-info">
              We build attractive and highly functional websites that visitors and search engines
              can’t resist.
            </p>

            <div className="what-offer__list">
              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">logo design</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">ecommerce websites</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">business Website</span>
              </div>
            </div>
          </div>

          <div className="what-offer__card what-offer__card--2">
            <img src="./images/what_offer/img_2.svg" alt="" className="what-offer__img" />

            <h4 className="what-offer__card-title">strategic marketing</h4>

            <p className="what-offer__card-info">
              We get your brand to where the relevant people are by choosing the proper channels.
            </p>

            <div className="what-offer__list">
              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">social medea marketing</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">email marketing</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">SEO services</span>
              </div>
            </div>
          </div>

          <div className="what-offer__card what-offer__card--3">
            <img src="./images/what_offer/img_3.svg" alt="" className="what-offer__img" />

            <h4 className="what-offer__card-title">software development</h4>

            <p className="what-offer__card-info">
              We help you identify errors and explore opportunities that can be utilized for
              improvement.
            </p>

            <div className="what-offer__list">
              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">desktop app development</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">mobile app development</span>
              </div>

              <div className="what-offer__proposal">
                <img
                  src="./images/what_offer/banan_list.svg"
                  alt=""
                  className="what-offer__list-img"
                />

                <span className="what-offer__list-text">blockchain development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
