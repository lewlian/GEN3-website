import styles from "./index.module.scss";
import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { ANIMATION } from "../../context/actionType";
import { AnimationContext } from "../../context/animationContext";
import useWindowDimensions from "../../hooks/useWindowDimension";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  NFTProjects,
  DefiProjects,
  HackathonProjects,
} from "../../utils/constants/projects";
import { getIconSvgForProjects } from "../../utils";
import Image from "next/image";

const Projects = () => {
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

  const renderProjectCard = (proj: any) => {
    return (
      <li
        className={styles.content_body_section_projs_card}
        key={`${proj.title}`}
      >
        <div className={styles.content_body_section_projs_card_image}>
          <Image src={proj.image} alt={`${proj.title}`} layout="fill" />
        </div>

        <p className={styles.content_body_section_projs_card_title}>
          {proj.title}
        </p>

        <div className={styles.content_body_section_projs_card_socials}>
          {proj.socials.map((social: any) => {
            return (
              <a
                href={social.link}
                key={`Projects_${proj.title}_${social.type}`}
                target="_blank"
                rel="noreferrer"
              >
                {getIconSvgForProjects(social.type)}
              </a>
            );
          })}
        </div>
      </li>
    );
  };

  const renderHackathonCard = (proj: any) => {
    return (
      <li
        className={styles.content_body_section_projs_card}
        key={`${proj.title}`}
      >
        <div className={styles.content_body_section_projs_card_image}>
          <Image src={proj.image} alt={`${proj.title}`} layout="fill" />
        </div>

        <p className={styles.content_body_section_projs_card_title}>
          {proj.title}
        </p>

        <p className={styles.content_body_section_projs_card_sub}>
          At {proj.hackathon}
        </p>

        <div className={styles.content_body_section_projs_card_socials}>
          {proj.socials.map((social: any) => {
            return (
              <a
                href={social.link}
                key={`Projects_${proj.title}_${social.type}`}
                target="_blank"
                rel="noreferrer"
              >
                {getIconSvgForProjects(social.type)}
              </a>
            );
          })}
        </div>
      </li>
    );
  };

  return (
    <div id="ProjectsContainer" className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id="ProjectsTitle">
            OUR <span>PROJECTS</span>
          </h2>

          <div id="ProjectsContent" className={styles.content_body}>
            <div className={styles.content_body_section}>
              <h3>NFTs</h3>
              <ul className={styles.content_body_section_projs}>
                {NFTProjects.map((proj) => renderProjectCard(proj))}
              </ul>
            </div>
            <div className={styles.content_body_section}>
              <h3>Defi</h3>
              <ul className={styles.content_body_section_projs}>
                {DefiProjects.map((proj) => renderProjectCard(proj))}
              </ul>
            </div>
            <div className={styles.content_body_section}>
              <h3>Hackathons</h3>
              <ul className={styles.content_body_section_projs}>
                {HackathonProjects.map((proj) => renderHackathonCard(proj))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
