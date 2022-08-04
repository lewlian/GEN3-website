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
import services, { IService } from "../../utils/constants/services";
import AccordionItem from "./AccordionItem";

export interface IData extends IService {
  open: boolean;
}

const Services = () => {
  const { appState: animationState, appDispatch: animationDispatch } =
    useContext(AnimationContext);
  const [currentData, setCurrentData] = useState<IData[]>([]);

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
            trigger: "#ServicesContainer",
            onLeaveBack: (self) => self.disable(),
          },
        })
        .fromTo(
          q("#ServicesTitle"),
          {
            autoAlpha: 0.3,
          },
          {
            autoAlpha: 1,
            duration: 2,
          }
        )
        .fromTo(
          q("#ServicesContent"),
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

  useEffect(() => {
    const prepData = () => {
      return services.map((item) => {
        return {
          ...item,
          open: false,
        };
      });
    };
    setCurrentData(prepData());
  }, []);

  const handleClick = (index: number) => {
    const _temp = [...currentData];

    // Check if the current index is already open;
    if (_temp[index].open) {
      _temp[index].open = false;
    } else {
      // Convert all to false
      _temp.forEach((x) => (x.open = false));

      // Find the index to true
      _temp[index].open = true;
    }

    setCurrentData(_temp);
  };

  return (
    <div id="ServicesContainer" className={styles.container} ref={el}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h2 id="ServicesTitle">
            <span>WHAT</span> WE DO
          </h2>

          <ul className={styles.grid}>
            {currentData.map((data, index: number) => {
              return (
                <AccordionItem
                  data={data}
                  key={index}
                  handleClick={handleClick}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
