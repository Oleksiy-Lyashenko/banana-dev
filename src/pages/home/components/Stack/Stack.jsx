// import '../../styles/components/stack_page.scss';
import { useState } from 'react';
import './main.scss';

let REVIEW_WIDTH = 650;

if (window.screen.width >= 600) {
  REVIEW_WIDTH = 700;
}

export const Stack = () => {
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
    <div className="stack-page">
      <div className="stack-page__content">
        <h2 className="main__page-title stack-page__title container"> Our Tech stack</h2>

        <div className="main-stack container--stack">
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
                          src="./images/stack_page/sketch_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Sketch</span>
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
                          src="./images/stack_page/ai_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Adobe XD</span>
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
                          src="./images/stack_page/angular_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Angular</span>
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

              <div className="main-stack_wrap">
                <div className="main-stack__direction-block">
                  <span className="main-stack__direction">mobile</span>

                  <div className="main-stack__tool-block">
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/java_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Java</span>
                    </div>

                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/kotlin_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Kotlin</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/swift_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Swift</span>
                    </div>
                    <div className="main-stack__tool">
                      <div className="main-stack__block-img">
                        <img
                          src="./images/stack_page/obj_logo.svg"
                          alt=""
                          className="main-stack__img"
                        />
                      </div>

                      <span className="main-stack__tool-name">Objective-C</span>
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
                    className="home-clients__arrow-img"
                    onClick={handleLeftArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/active_left_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img"
                    onClick={handleLeftArrow}
                  />
                )}
              </div>

              <div className="main-stack__arrow-block">
                {offset <= 0 && offset !== -(REVIEW_WIDTH * 3) ? (
                  <img
                    src="./images/our_clients_page/active_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img"
                    onClick={handleRightArrow}
                  />
                ) : (
                  <img
                    src="./images/our_clients_page/passive_right_arrow.svg"
                    alt=""
                    className="home-clients__arrow-img"
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
};
