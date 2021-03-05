import { Children, isValidElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';

type Props = {
  children: React.ReactNode;
};

function Slider({ children }: Props) {
  const [sliderRef] = useKeenSlider<HTMLUListElement>({
    slidesPerView: 4,
    spacing: 12,
  });

  return (
    <ul ref={sliderRef} className="keen-slider">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return <li className="keen-slider__slide">{child}</li>;
        }
      })}
    </ul>
  );
}

export default Slider;
