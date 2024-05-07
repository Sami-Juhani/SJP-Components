import { mockData } from "../assets/data/mediaScroller";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { MediaScrollerOptions } from "../components/MediaScroller";


export function InfiniteCarouselTest() {
  const userDefinedOptions: MediaScrollerOptions = {
    blurred: false,
  };

  return <InfiniteCarousel data={mockData} options={userDefinedOptions} />;
}
