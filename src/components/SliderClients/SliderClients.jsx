/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import '../../styles/components/our_clients.scss';

let REVIEW_WIDTH = window.screen.width;

if (window.screen.width >= 600) {
  REVIEW_WIDTH = 625
}

export const SliderClients = () => {
  const [offset, setOffset] = useState(0);

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + REVIEW_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - REVIEW_WIDTH;

      const maxOffset = -(REVIEW_WIDTH * 3);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <>
      <div
        className="our-clients__block container"
        style={{
          transform: `translateX(${offset}px)`,
        }}>
        <div className="our-clients__column">
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-clients__column">
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-clients__column">
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-clients__column">
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
          <div className="our-clients__card">
            <div className="our-clients__top">
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
              <img src="./images/our_clients/star.svg" alt="" className="our-clients__star" />
            </div>

            <p className="our-clients__review">
              I’ve worked with some incredible devs in my career, but the experience I am having
              with my dev through Lemon.io is so 🔥. I feel invincible as a founder. So thankful to
              the team!
            </p>

            <div className="our-clients__review-bottom">
              <img
                src="./images/our_clients/client_img.png"
                alt=""
                className="our-clients__client-img"
              />

              <div className="our-clients__review-bottom-info">
                <span className="our-clients__name">Mitchel Gronyx</span>

                <div className="our-clients__position">// founder of Microssoft, UK</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="our-clients__bottom">
          <div className="our-clients__arrow">
            {offset === 0 ? (
              <img
                src="./images/our_clients/passive_left_arrow.svg"
                alt=""
                className="our-clients__arrow-img"
                onClick={handleLeftArrow}
              />
            ) : (
              <img
                src="./images/our_clients/active_left_arrow.svg"
                alt=""
                className="our-clients__arrow-img"
                onClick={handleLeftArrow}
              />
            )}

            {offset <= 0 && offset !== -(REVIEW_WIDTH * 3) ? (
              <img
                src="./images/our_clients/active_right_arrow.svg"
                alt=""
                className="our-clients__arrow-img"
                onClick={handleRightArrow}
              />
            ) : (
              <img
                src="./images/our_clients/passive_right_arrow.svg"
                alt=""
                className="our-clients__arrow-img"
                onClick={handleRightArrow}
              />
            )}
          </div>
          <button className="our-clients__button">all reviews</button>
        </div>
      </div>
    </>
  );
}
