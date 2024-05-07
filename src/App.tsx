import { InfiniteCarousel, Media, MediaScrollerOptions } from "./components/InfiniteCarousel";

const mockData: Media[] = [
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=1&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=2&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=3&q=95&w=320&h=360&fit=fill",
    description:
      "fawfwawfa  ntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=4&q=95&w=320&h=360&fit=fill",
    description:
      "PERKLEEEEELEE t consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=5&q=95&w=320&h=360&fit=fill",
    description:
      "JAEOJOAETEPA PA EPTtur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=6&q=95&w=320&h=360&fit=fill",
    description:
      "aettae  tea eat ea Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=7&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=8&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=9&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=10&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=11&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=12&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=13&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=14&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
  {
    id: crypto.randomUUID(),
    title: "Title",
    imgSrc: "https://via.assets.so/album.png?id=15&q=95&w=320&h=360&fit=fill",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptatum consequuntur, facere reiciendis acommodi sunt odio expedita molestias nesciunt? Suscipit quisquam ipsam expedita enim quasi, illumdignissimos voluptatibus facilis.",
    imgAlt: "imageAltText",
  },
];

const userDefinedOptions: MediaScrollerOptions = {
  blurred: true,
};

function App() {
  return (
    <main className="container-max-width">
      <InfiniteCarousel data={mockData} />
    </main>
  );
}

export default App;
