import '../../styles/components/wow_factor.scss';

export const WowFactorPage = () => {
  return (
    <div className="wow-factor">
      <div className="wow-factor__content container">
        <div className="wow-factor__info">
          <h2 className="main__page-title wow-factor__title">
            Give Your <br />
            product that <br />
            <span className="wow-factor__title--pink">Wow</span> Factor
          </h2>

          <p className="wow-factor__description">
            We build it all, having an effective website or mobile app is easy. Work with our
            professional design team to tell your brand story and reach your customers.
          </p>

          <div className="wow-factor__list">
            <div className="wow-factor__proposal">
              <img
                src="./images/what_offer/banan_list.svg"
                alt=""
                className="wow-factor__list-img"
              />

              <span className="wow-factor__list-text">professional design & support</span>
            </div>

            <div className="wow-factor__proposal">
              <img
                src="./images/what_offer/banan_list.svg"
                alt=""
                className="wow-factor__list-img"
              />

              <span className="wow-factor__list-text">
                built to grow your reach & customer base
              </span>
            </div>

            <div className="wow-factor__proposal">
              <img
                src="./images/what_offer/banan_list.svg"
                alt=""
                className="wow-factor__list-img"
              />

              <span className="wow-factor__list-text">
                drive influence with social media connections
              </span>
            </div>
          </div>
        </div>

        <img src="./images/wow_factor/pc_img.svg" alt="" className='wow-factor__img'/>
      </div>
    </div>
  );
};
