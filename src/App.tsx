import { MediaScrollerTest } from "./pages/MediaScrollerTest";
import { NotificationModalTest } from "./pages/NotificationModalTest";
import { InfiniteCarouselTest } from "./pages/InfiniteCarouselTest";
import { FancyHeroTest } from "./pages/FancyHeroTest";
import { NavBarTest } from "./pages/NavBarTest";

function App() {
  return (
    <main className="main-container">
      <NavBarTest />
      <div className="container-max-width">
        <FancyHeroTest />
        <NotificationModalTest />
        <MediaScrollerTest />
        <InfiniteCarouselTest />
      </div>
    </main>
  );
}

export default App;
