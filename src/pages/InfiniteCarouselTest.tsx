import { mockData } from "../assets/data/mediaScroller";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { CarouselOptions } from "../components/InfiniteCarousel/InfiniteCarousel";


export function InfiniteCarouselTest() {
  const userDefinedOptions: CarouselOptions = {
    blurred: false,
    itemsOnScreen: 5
  };

  return <InfiniteCarousel data={mockData} options={userDefinedOptions} />;
}
