/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Pricing.module.scss';
import { MutableRefObject, useContext, useEffect, useRef } from 'react';
import { ANIMATION } from '../context/actionType';
import { AnimationContext } from '../context/animationContext';
import useWindowDimensions from '../hooks/useWindowDimension';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Pricing = () => {
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
            trigger: '#PricingContainer',
            onLeaveBack: (self) => self.disable(),
          },
        })
        .fromTo(
          q('#PricingTitle'),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          q('#PricingContent'),
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
    <div id='PricingContainer' className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id='PricingTitle'>PRICING</h2>

          <p id='PricingContent'>
            Flexible pricing for both creators and corporate who are interested
            to collaborate with us.
          </p>

          <div className={styles.types}>
            <div className={styles.types_card}>
              <h3>CREATORS</h3>
              <p>
                If you are an artist, creator or founding team looking to launch
                your NFTs
              </p>
              <ul>
                <li>Flexible pricing packages</li>
                <li>Pay with an equity of sales from launch</li>
                <li>Customized smart contract for your launch</li>
                <li>Full support up to launch</li>
              </ul>
            </div>

            <div className={styles.types_divider} />

            <div className={styles.types_card}>
              <h3>CORPORATE</h3>
              <p>
                If you represent a corporate entity looking to take their first
                step into NFT
              </p>
              <ul>
                <li>Fixed quotation for services</li>
                <li>Retain full equity of your project</li>
                <li>Customized smart contract</li>
                <li>Full support up to launch </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
