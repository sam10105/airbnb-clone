import { Children, isValidElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import styles from './Slider.module.css';

type Props = {
  children: React.ReactNode;
};

function Slider({ children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLUListElement>({
    slidesPerView: 3,
    spacing: 12,
    breakpoints: {
      '(min-width: 1128px)': {
        slidesPerView: 4,
      },
    },
    slideChanged: (s) => {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <div className="relative">
      {!!currentSlide && (
        <div className="absolute block transform -translate-y-1/2 z-10 top-1/2 -left-4">
          <span className="top-1/2">
            <button
              type="button"
              className={styles.button}
              onClick={slider?.prev}
            >
              <span className={styles.icon}>
                <svg viewBox="0 0 18 18" className="w-2.5 h-2.5 fill-current">
                  <path
                    d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </span>
        </div>
      )}
      <ul ref={sliderRef} className="keen-slider">
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return <li className="keen-slider__slide">{child}</li>;
          }
        })}
      </ul>
      {currentSlide !==
        slider?.details().size - slider?.details().slidesPerView && (
        <div className="absolute block transform -translate-y-1/2 z-10 top-1/2 -right-4">
          <span className="top-1/2">
            <button
              type="button"
              className={styles.button}
              onClick={slider?.next}
            >
              <span className={styles.icon}>
                <svg viewBox="0 0 18 18" className="w-2.5 h-2.5 fill-current">
                  <path
                    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Slider;
