import '../../styles/components/stack_page.scss';

export const StackPage = () => {
  return (
    <div className="stack-page">
      <div className="stack-page__content container">
        <h2 className="main__page-title stack-page__title"> Our Tech stack</h2>

        <div className="grid-stack">
          {/* row 1 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-1-1_2">
              UI/UX Design
            </span>
            <span className="grid-stack__field grid-stack__field--position-1-3"></span>
            <span className="grid-stack__field grid-stack__field--position-1-4"></span>
            <span className="grid-stack__field grid-stack__field--position-1-5_6"></span>
            <span className="grid-stack__field grid-stack__field--position-1-7"></span>
            <span className="grid-stack__direction grid-stack__field--position-1-8_9">
              FrontEnd
            </span>
            <span className="grid-stack__field grid-stack__field--position-1-10"></span>
            <span className="grid-stack__field grid-stack__field--position-1-11"></span>
            <span className="grid-stack__field grid-stack__field--position-1-12_13"></span>
          </>

          {/* row 2 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-2-1 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/figma_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-2_3 grid-stack__field--position-none-top-border">
              Figma
            </span>

            <span className="grid-stack__direction grid-stack__field--position-2-4 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/sketch_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-5_6 grid-stack__field--position-none-top-border">
              Sketch
            </span>

            <span className="grid-stack__direction grid-stack__field--position-2-7 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__direction grid-stack__field--position-2-8 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/angular_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-9_10 grid-stack__field--position-none-top-border">
              Angular
            </span>

            <span className="grid-stack__direction grid-stack__field--position-2-11 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/js_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-2-12_13 grid-stack__field--position-none-top-border">
              JavaScript
            </span>
          </>

          {/* row 3 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-3-1 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ps_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-2_3 grid-stack__field--position-none-top-border">
              Photoshop
            </span>

            <span className="grid-stack__direction grid-stack__field--position-3-4 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ai_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-5_6 grid-stack__field--position-none-top-border">
              Illustrator
            </span>

            <span className="grid-stack__direction grid-stack__field--position-3-7 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__direction grid-stack__field--position-3-8 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/html_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-9_10 grid-stack__field--position-none-top-border">
              HTML
            </span>

            <span className="grid-stack__direction grid-stack__field--position-3-11 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/css_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-3-12_13 grid-stack__field--position-none-top-border">
              CSS
            </span>
          </>

          {/* row 4 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-4-1 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/ae_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-2_3 grid-stack__field--position-none-top-border">
              Adobe Effects
            </span>

            <span className="grid-stack__direction grid-stack__field--position-4-4 grid-stack__field--position-none-top-border">
              <img src="./images/stack_page/xd_logo.svg" alt="" className="grid-stack__logo-img" />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-5_6 grid-stack__field--position-none-top-border">
              Adobe XD
            </span>

            <span className="grid-stack__direction grid-stack__field--position-4-7 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__direction grid-stack__field--position-4-8 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/react_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-4-9_10 grid-stack__field--position-none-top-border">
              React
            </span>

            <span className="grid-stack__direction grid-stack__field--position-4-11 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-4-12_13 grid-stack__field--position-none-top-border"></span>
          </>

          {/* row 5 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-5-1_2 grid-stack__field--position-none-top-border">
              back-end
            </span>
            <span className="grid-stack__field grid-stack__field--position-5-3 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-4 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-5_6 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-7 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__direction grid-stack__field--position-5-8_9 grid-stack__field--position-none-top-border">
              mobile
            </span>
            <span className="grid-stack__field grid-stack__field--position-5-10 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-11 grid-stack__field--position-none-top-border"></span>
            <span className="grid-stack__field grid-stack__field--position-5-12_13 grid-stack__field--position-none-top-border"></span>
          </>

          {/* row 6 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-6-1 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/firebase_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-2_3 grid-stack__field--position-none-top-border">
              Firebase
            </span>

            <span className="grid-stack__direction grid-stack__field--position-6-4 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/mongo_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-5_6 grid-stack__field--position-none-top-border">
              Mongo DB
            </span>

            <span className="grid-stack__direction grid-stack__field--position-6-7 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__direction grid-stack__field--position-6-8 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/java_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-9_10 grid-stack__field--position-none-top-border">
              Java
            </span>

            <span className="grid-stack__direction grid-stack__field--position-6-11 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/kotlin_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-6-12_13 grid-stack__field--position-none-top-border">
              Kotlin
            </span>
          </>

          {/* row 7 */}
          <>
            <span className="grid-stack__direction grid-stack__field--position-7-1 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/node_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-2_3 grid-stack__field--position-none-top-border">
              NodeJS
            </span>

            <span className="grid-stack__direction grid-stack__field--position-7-4 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/mysql_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-5_6 grid-stack__field--position-none-top-border">
              MySQL
            </span>

            <span className="grid-stack__direction grid-stack__field--position-7-7 grid-stack__field--position-none-top-border"></span>

            <span className="grid-stack__direction grid-stack__field--position-7-8 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/swift_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-9_10 grid-stack__field--position-none-top-border">
              Swift
            </span>

            <span className="grid-stack__direction grid-stack__field--position-7-11 grid-stack__field--position-none-top-border">
              <img
                src="./images/stack_page/obj_logo.svg"
                alt=""
                className="grid-stack__logo-img"
              />
            </span>
            <span className="grid-stack__field grid-stack__field--position-7-12_13 grid-stack__field--position-none-top-border">
              Objective-C
            </span>
          </>
        </div>
      </div>
    </div>
  );
};
