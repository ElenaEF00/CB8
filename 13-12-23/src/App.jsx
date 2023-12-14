import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import CardList from "./components/cardList/CardList";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/300/200?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/200?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/200?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/200?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/300/200?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?11",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?12",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/200?13",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/200?14",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/200?15",
      title: "Image card",
    },
  ];
  const imagesList3 = [
    {
      id: 1,
      img: "https://picsum.photos/300/200?20",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?22",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/200?23",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/200?24",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/200?25",
      title: "Image card",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <CardList cardListObj={{ title: "Most Popular", list: imagesList1 }} />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <CardList cardListObj={{ title: "Historical", list: imagesList3 }} />
      <Footer />
    </div>
  );
}

export default App;
