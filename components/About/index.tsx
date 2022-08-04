import styles from "./index.module.scss";
import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { ANIMATION } from "../../context/actionType";
import { AnimationContext } from "../../context/animationContext";
import useWindowDimensions from "../../hooks/useWindowDimension";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const { appState: animationState, appDispatch: animationDispatch } =
    useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  useEffect(() => {
    if (
      !animationState.animationTriggered &&
      windowDimensions.width > LARGE_SCREEN_SIZE
    ) {
      animationDispatch({ type: ANIMATION, value: null });
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            start: "top 80%",
            end: "bottom+=100 top",
            trigger: "#AboutContainer",
            onLeaveBack: (self) => self.disable(),
          },
        })
        .fromTo(
          q("#AboutTitle"),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          q("#AboutContent"),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          "-=2"
        );
    }
  }, [windowDimensions.width]);

  return (
    <div id="AboutContainer" className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id="AboutTitle">
            <span>WHO</span> WE ARE
          </h2>

          <p id="AboutContent">
            GEN3 Studios is a subsidiary of NEX10 Labs. We are a team of
            builders that seek to propel creators and companies into the Web 3.0
            space. We help transform your creative vision onto the blockchain
            through NFTs and Metaverse experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
