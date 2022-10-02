import type { NextPage } from "next";

import Meta from "../components/Meta";
import styles from "../styles/Main.module.scss";

import { Element as ScrollElement } from "react-scroll";
import Navigation, { NavItemsType } from "../components/Navigation";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import ContactUs from "../components/ContactUs";

const Index: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Meta />
        <Navigation />

        <main className={styles.main}>
          <div className={styles.container_sub}>
            <div className={styles.background1}>
              <Home />
              <ScrollElement name={NavItemsType.ABOUT}>
                <About />
              </ScrollElement>
              <ScrollElement name={NavItemsType.SERVICES}>
                <Services />
              </ScrollElement>
            </div>

            {/* <ScrollElement name={NavItemsType.PROJECTS}>
              <Projects />
            </ScrollElement> */}

            {/* <div className={styles.background2}>
              <ScrollElement name={NavItemsType.PRICING}>
                <Pricing />
              </ScrollElement>
            </div> */}

            <ScrollElement name={NavItemsType.CONTACT}>
              <ContactUs />
            </ScrollElement>

            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
