import styles from "./index.module.scss";
import Scroll from "react-scroll";
import { NavItemsType } from "../Navigation";

var Element = Scroll.Element;
var scroller = Scroll.scroller;

const Home = () => {
  return (
    <div id="HomeContainer" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.content_desc}>
            THE NEXT GENERATION <br /> OF BUILDERS
          </div>

          <div className={styles.content_sum}>
            <p>SMART CONTRACTS | WEB DEVELOPMENT | CONSULTING</p>
          </div>

          <div className={styles.content_action}>
            <button
              type="button"
              onClick={() =>
                scroller.scrollTo(NavItemsType.CONTACT, {
                  spy: "true",
                  smooth: "true",
                  duration: 300,
                  isDynamic: "true",
                })
              }
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
