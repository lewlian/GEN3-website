/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.scss";
import Gen3Logo from "../../public/assets/misc/footer_gen3.png";

const Footer = () => {
  return (
    <div id="FooterContainer" className={styles.container}>
      <div className={styles.main}>
        <div className={styles.logos}>
          <img src={Gen3Logo.src} alt="Gen3 Logo" />
        </div>

        <p>© GEN3 Studios. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
