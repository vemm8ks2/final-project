import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const items = mainCarouselData.map((item) => (
  <img key={item.path} src={item.image} alt="" className="cursor-pointer" role="presentation" />
));

const MainCarousel = () => {
  return (
    <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={1000} infinite />
  );
};

export default MainCarousel;
