import { MediaScrollerTest } from "./pages/MediaScrollerTest";
import { NotificationModalTest } from "./pages/NotificationModalTest";
import { InfiniteCarouselTest } from "./pages/InfiniteCarouselTest";

function App() {
  return (
    <main className="container-max-width">
      <NotificationModalTest />
      <MediaScrollerTest />
      <InfiniteCarouselTest />
    </main>
  );
}

export default App;
