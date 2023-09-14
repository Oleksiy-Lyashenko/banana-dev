import '../../styles/components/stack_page.scss';

export const StackPage = () => {
  return (
    <div className="stack-page">
      <div className="stack-page__content">
        <h2 className="main__page-title stack-page__title container"> Our Tech stack</h2>

        <div className="grid-stack container--stack">
          <img src="./images/stack_page/top_shadow.png" alt="" className="grid-stack__top-shadow" />
          <img
            src="./images/stack_page/left_shadow.png"
            alt=""
            className="grid-stack__left-shadow"
          />
          <img
            src="./images/stack_page/right_shadow.png"
            alt=""
            className="grid-stack__right-shadow"
          />
          <img
            src="./images/stack_page/bottom_shadow.png"
            alt=""
            className="grid-stack__bottom-shadow"
          />

          {/* row 1 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-1-1"></span>
            <span className="grid-stack__direction grid-stack__field--position-1-2_3"></span>
            <span className="grid-stack__field grid-stack__field--position-1-4"></span>
            <span className="grid-stack__field grid-stack__field--position-1-5"></span>
            <span className="grid-stack__field grid-stack__field--position-1-6_7"></span>
            <span className="grid-stack__field grid-stack__field--position-1-8"></span>
            <span className="grid-stack__direction grid-stack__field--position-1-9_10"></span>
            <span className="grid-stack__field grid-stack__field--position-1-11"></span>
            <span className="grid-stack__field grid-stack__field--position-1-12"></span>
            <span className="grid-stack__field grid-stack__field--position-1-13_14"></span>
            <span className="grid-stack__field grid-stack__field--position-1-15"></span>
          </>

          {/* row 2 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-2-1"></span>
            <span className="grid-stack__direction grid-stack__field--position-2-2_3">
              UI/UX Design
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-4"></span>
            <span className="grid-stack__field grid-stack__field--position-2-5"></span>
            <span className="grid-stack__field grid-stack__field--position-2-6_7"></span>
            <span className="grid-stack__field grid-stack__field--position-2-8"></span>
            <span className="grid-stack__direction grid-stack__field--position-2-9_10">
              FrontEnd
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-11"></span>
            <span className="grid-stack__field grid-stack__field--position-2-12"></span>
            <span className="grid-stack__field grid-stack__field--position-2-13_14"></span>
            <span className="grid-stack__field grid-stack__field--position-2-15"></span>
          </>

          {/* row 3 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-3-1"></span>
            <span className="grid-stack__direction grid-stack__field--position-3-2 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/figma_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-3_4 grid-stack__field--position-none-top-border">
              Figma
            </span>

            <span className="grid-stack__field grid-stack__field--position-3-5 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/sketch_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-6_7 grid-stack__field--position-none-top-border">
              Sketch
            </span>

            <span className="grid-stack__field grid-stack__field--position-3-8 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__field grid-stack__field--position-3-9 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/angular_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-10_11 grid-stack__field--position-none-top-border">
              Angular
            </span>

            <span className="grid-stack__field grid-stack__field--position-3-12 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/js_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-13_14 grid-stack__field--position-none-top-border">
              JavaScript
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-15"></span>
          </>

          {/* row 4 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-4-1"></span>
            <span className="grid-stack__field grid-stack__field--position-4-2 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ps_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-3_4 grid-stack__field--position-none-top-border">
              Photoshop
            </span>

            <span className="grid-stack__field grid-stack__field--position-4-5 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ai_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-6_7 grid-stack__field--position-none-top-border">
              Illustrator
            </span>

            <span className="grid-stack__field grid-stack__field--position-4-8 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__field grid-stack__field--position-4-9 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/html_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-10_11 grid-stack__field--position-none-top-border">
              HTML
            </span>

            <span className="grid-stack__field grid-stack__field--position-4-12 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/css_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-13_14 grid-stack__field--position-none-top-border">
              CSS
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-15"></span>
          </>

          {/* row 5 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-5-1"></span>
            <span className="grid-stack__field grid-stack__field--position-5-2 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ae_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-5-3_4 grid-stack__field--position-none-top-border">
              Adobe Effects
            </span>

            <span className="grid-stack__field grid-stack__field--position-5-5 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/xd_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-5-6_7 grid-stack__field--position-none-top-border">
              Adobe XD
            </span>

            <span className="grid-stack__field grid-stack__field--position-5-8 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__field grid-stack__field--position-5-9 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/react_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-5-10_11 grid-stack__field--position-none-top-border">
              React
            </span>

            <span className="grid-stack__field grid-stack__field--position-5-12 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-13_14 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-15"></span>
          </>

          {/* row 6 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-6-1"></span>
            <span className="grid-stack__direction grid-stack__field--position-6-2_3 grid-stack__field--position-none-top-border">
              back-end
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-4 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-5 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-6_7 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-8 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-6-9_10 grid-stack__field--position-none-top-border">
              mobile
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-11 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-12 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-13_14 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-6-15"></span>
          </>

          {/* row 7 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-7-1"></span>
            <span className="grid-stack__field grid-stack__field--position-7-2 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/firebase_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-3_4 grid-stack__field--position-none-top-border">
              Firebase
            </span>

            <span className="grid-stack__field grid-stack__field--position-7-5 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/mongo_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-6_7 grid-stack__field--position-none-top-border">
              Mongo DB
            </span>

            <span className="grid-stack__field grid-stack__field--position-7-8 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__field grid-stack__field--position-7-9 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/java_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-10_11 grid-stack__field--position-none-top-border">
              Java
            </span>

            <span className="grid-stack__field grid-stack__field--position-7-12 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/kotlin_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-13_14 grid-stack__field--position-none-top-border">
              Kotlin
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-15"></span>
          </>

          {/* row 8 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-8-1"></span>
            <span className="grid-stack__field grid-stack__field--position-8-2 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/node_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-8-3_4 grid-stack__field--position-none-top-border">
              NodeJS
            </span>

            <span className="grid-stack__field grid-stack__field--position-8-5 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/mysql_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-8-6_7 grid-stack__field--position-none-top-border">
              MySQL
            </span>

            <span className="grid-stack__field grid-stack__field--position-8-8 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__field grid-stack__field--position-8-9 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/swift_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-8-10_11 grid-stack__field--position-none-top-border">
              Swift
            </span>

            <span className="grid-stack__field grid-stack__field--position-8-12 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/obj_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-8-13_14 grid-stack__field--position-none-top-border">
              Objective-C
            </span>
            <span className="grid-stack__field grid-stack__field--position-8-15"></span>
          </>

          {/* row 9 */}
          <>
            <span className="grid-stack__field grid-stack__field--position-9-1"></span>
            <span className="grid-stack__direction grid-stack__field--position-9-2 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-9-3_4 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-9-5 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-9-6_7 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-9-8 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-9-9 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-9-10_11 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-9-12 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-9-13_14 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-9-5"></span>
          </>

          {/* additional fields to tablet*/}
          <>
            <div className="grid-stack__field grid-stack__field--position-add-6-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-7-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-8-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-9-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-13-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-14-1"></div>
            <div className="grid-stack__field grid-stack__field--position-add-15-1"></div>{' '}
          </>

          {/* additional fields to mobile */}
          <>
            <div className="grid-stack__field grid-stack__field--position-mob-7-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-8-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-10-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-11-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-12-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-13-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-14-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-17-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-19-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-20-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-21-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-22-1"></div>
            <div className="grid-stack__field grid-stack__field--position-mob-23-1"></div>
          </>
        </div>
      </div>
    </div>
  );
};
