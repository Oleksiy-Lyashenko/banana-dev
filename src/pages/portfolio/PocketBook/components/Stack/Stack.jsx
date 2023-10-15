import { useState } from 'react';
import './main.scss'

let REVIEW_WIDTH = 650;

if (window.screen.width >= 600) {
  REVIEW_WIDTH = 700;
}

export const Stack = () =>  {
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

      const maxOffset = -(REVIEW_WIDTH * 2);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className="stack-page">
      <div className="stack-page__content">
        <h2 className="main__page-title stack-page__title container"> Our Tech stack</h2>

        <div className="main-stack main-stack--pocketbook container--stack">
          <div className="container">
            <div
              className="main-stack__block"
              style={{
                transform: `translateX(${offset}px)`,
              }}>
              <div className="main-stack_wrap">
                <div className="main-stack__direction-block">
                  <span className="main-stack__direction">UI/UX Design</span>

                  <div className="main-stack__tool-block">
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/figma_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Figma</span>
                    </div>

                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/ai_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Illustrator</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/ae_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">After Effects</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/ps_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Photoshop</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-stack_wrap">
                <div className="main-stack__direction-block">
                  <span className="main-stack__direction">Frontend</span>

                  <div className="main-stack__tool-block">
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/react_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">React</span>
                    </div>

                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/js_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">JavaScript</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/html_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">HTML</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/css_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">CSS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-stack_wrap">
                <div className="main-stack__direction-block">
                  <span className="main-stack__direction">backend</span>

                  <div className="main-stack__tool-block">
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/firebase_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Firebase</span>
                    </div>

                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/mongo_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Mongo DB</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/node_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">NodeJS</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/mysql_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-stack__bottom">
              <div className="main-stack__arrow-block">
                {offset === 0 ? (
                  <img
                    src="./images/our_clients_page/passive_left_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack__arrow-img"
                    onClick={handleLeftArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/active_left_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack__arrow-img"
                    onClick={handleLeftArrow}
                  />
                )}
              </div>

              <div className="main-stack__arrow-block">
                {offset <= 0 && offset !== -(REVIEW_WIDTH * 2) ? (
                  <img
                    src="./images/our_clients_page/active_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack__arrow-img"
                    onClick={handleRightArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/passive_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img main-stack__arrow-img"
                    onClick={handleRightArrow}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
