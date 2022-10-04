import styles from "./index.module.scss";
import Scroll, { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimension";
import socials from "../../utils/constants/socials";
import { getIconSvg, getGen3LogoSvg } from "../../utils";

export enum NavItemsType {
  ABOUT = "ABOUT",
  SERVICES = "SERVICES",
  PROJECTS = "PROJECTS",
  CONTACT = "CONTACT",
}

export const navItems = [
  { name: "ABOUT", href: NavItemsType.ABOUT },
  { name: "SERVICES", href: NavItemsType.SERVICES },
  { name: "PROJECTS", href: NavItemsType.PROJECTS },
  { name: "CONTACT", href: NavItemsType.CONTACT },
];

const Navigation = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  return (
    <>
      {windowDimensions.width < LARGE_SCREEN_SIZE ? (
        <>
          <nav id="TopNavigationSmall" className={styles.container}>
            <div
              className={`${styles.main_mobile} ${
                expanded ? styles.main_mobile_expanded : ""
              }`}
            >
              <div className={styles.main_mobile_nav}>
                <ul>
                  {navItems.map((item) => {
                    return (
                      <li key={`Navigation_${item.name}`}>
                        <ScrollLink
                          to={item.href}
                          spy={true}
                          smooth={true}
                          duration={300}
                          isDynamic={true}
                          activeClass={styles.nav_item_link_active}
                          onClick={() => setExpanded(false)}
                        >
                          {item.name}
                        </ScrollLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <ul className={styles.main_mobile_social}>
                {socials.map((item) => {
                  return (
                    <li key={`Navigation_Social_${item.name}`}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <>{getIconSvg(item.icon)}</>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.main_mobile_title}>
                <div
                  className={styles.main_logo}
                  onClick={() =>
                    Scroll.animateScroll.scrollToTop({
                      spy: "true",
                      smooth: "true",
                      duration: 300,
                      isDynamic: "true",
                    })
                  }
                >
                  {getGen3LogoSvg(false)}
                </div>
                <div
                  id="BurgerMenu"
                  className={styles.burger}
                  onClick={() => setExpanded((prevState) => !prevState)}
                >
                  <i className={!expanded ? styles.close : styles.open}></i>
                  <i className={!expanded ? styles.close : styles.open}></i>
                  <i className={!expanded ? styles.close : styles.open}></i>
                </div>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <nav id="Navigation" className={styles.container}>
          <div className={styles.main}>
            <div
              className={styles.main_logo}
              onClick={() =>
                Scroll.animateScroll.scrollToTop({
                  spy: "true",
                  smooth: "true",
                  duration: 300,
                  isDynamic: "true",
                })
              }
            >
              {getGen3LogoSvg(true)}
            </div>

            <div className={styles.main_sub}>
              <ul className={styles.nav_item}>
                {navItems.map((item) => {
                  return (
                    <li key={`Navigation_${item.name}`}>
                      <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        duration={300}
                        isDynamic={true}
                        activeClass={styles.nav_item_link_active}
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  );
                })}
              </ul>

              <ul className={styles.nav_social}>
                {socials.map((item) => {
                  return (
                    <li key={`Navigation_Social_${item.name}`}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <>{getIconSvg(item.icon)}</>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
