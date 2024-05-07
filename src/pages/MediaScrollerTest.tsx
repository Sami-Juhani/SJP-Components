import { mockData } from "../assets/data/mediaScroller";
import { MediaScroller } from "../components/MediaScroller";
import { MediaScrollerOptions } from "../components/MediaScroller";


export function MediaScrollerTest() {
  const userDefinedOptions: MediaScrollerOptions = {
    blurred: false,
  };

  return <MediaScroller data={mockData} options={userDefinedOptions} />;
}
