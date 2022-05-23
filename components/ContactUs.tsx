/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/ContactUs.module.scss';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { ANIMATION } from '../context/actionType';
import { AnimationContext } from '../context/animationContext';
import useWindowDimensions from '../hooks/useWindowDimension';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ContactForm from './ContactForm';

const ContactUs = () => {
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
            start: 'top 80%',
            end: 'bottom+=100 top',
            trigger: '#ContactUsContainer',
            onLeaveBack: (self) => self.disable(),
          },
        })
        .fromTo(
          q('#ContactUsTitle'),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          q('#ContactUsContent'),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          },
          '-=2'
        );
    }
  }, [windowDimensions.width]);

  return (
    <div id='ContactUsContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id='ContactUsTitle'>CONTACT US</h2>

          <p id='ContactUsContent'>
            Need our services? Let&apos;s have a chat!
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
