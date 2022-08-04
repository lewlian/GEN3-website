/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.scss";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ANIMATION } from "../../context/actionType";
import { AnimationContext } from "../../context/animationContext";
import useWindowDimensions from "../../hooks/useWindowDimension";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AliceCarousel from "react-alice-carousel";
import projects from "../../utils/constants/projects";
import { getIconSvgForProjects } from "../../utils";

const Projects = () => {
  const { appState: animationState, appDispatch: animationDispatch } =
    useContext(AnimationContext);

  gsap.registerPlugin(ScrollTrigger);
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  const q = gsap.utils.selector(el);
  const tl = useRef<gsap.core.Timeline>();

  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  const carouselEl = useRef<AliceCarousel>(null);

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
            trigger: "#ProjectsContainer",
            onLeaveBack: (self) => self.disable(),
          },
        })
        .fromTo(
          q("#ProjectsTitle"),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          q("#ProjectsContent"),
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

  const itemsDisplayInMediumScreen = projects.map((item, index: number) => {
    return (
      <div key={index} className={styles.item}>
        <img
          src={item.image.src}
          alt={item.title}
          className={styles.carousel_item_image}
        />
        <div
          id={`Projects_${item.title}`}
          className={styles.carousel_item_socials}
        >
          {item.socials.map((social) => {
            return (
              <a
                href={social.link}
                key={`Projects_${item.title}_${social.type}`}
                target="_blank"
                rel="noreferrer"
              >
                {getIconSvgForProjects(social.type)}
              </a>
            );
          })}
        </div>
      </div>
    );
  });

  const itemsDisplayInLargeScreen = projects.map((item, index: number) => {
    return (
      <div key={index} className={styles.carousel_item}>
        <img
          src={item.image.src}
          alt={item.title}
          className={styles.carousel_item_image}
        />
        <div
          id={`Projects_${item.title}`}
          className={styles.carousel_item_socials}
        >
          {item.socials.map((social) => {
            return (
              <a
                href={social.link}
                key={`Projects_${item.title}_${social.type}`}
                target="_blank"
                rel="noreferrer"
              >
                {getIconSvgForProjects(social.type)}
              </a>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div id="ProjectsContainer" className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id="ProjectsTitle">OUR PROJECTS</h2>
          <div className={styles.carousel}>
            <div
              className={`${styles.controller} unselectable`}
              onClick={(e) => {
                if (carouselEl && carouselEl.current) {
                  carouselEl.current.slidePrev(e);
                }
              }}
            >
              &lang;
            </div>
            <div className={styles.carousel_sub}>
              <AliceCarousel
                ref={carouselEl}
                animationDuration={800}
                disableDotsControls
                disableButtonsControls
                autoWidth
                infinite
                mouseTracking
                items={
                  windowDimensions.width < LARGE_SCREEN_SIZE
                    ? itemsDisplayInMediumScreen
                    : itemsDisplayInLargeScreen
                }
              />
            </div>

            <div
              className={`${styles.controller} unselectable`}
              onClick={(e) => {
                if (carouselEl && carouselEl.current) {
                  carouselEl.current.slideNext(e);
                }
              }}
            >
              &rang;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
