import "./index.css";

const Gallery = ({ galleryList }) => {
  let imageIndex = 0;

  const onClickEvent = (action) => {
    const imageEl = document.querySelector("#imageSlider");

    if (action === "next") {
      imageIndex = imageIndex + 1 > galleryList.length ? 0 : imageIndex + 1;
    } else {
      if (imageIndex - 1 < 0) imageIndex = galleryList.length;
    }

    imageEl.src = galleryList[imageIndex].img;
  };

  return (
    <>
      <h2>Scopri la nostra gallery</h2>
      <div className="gallery">
        <div className="images__wrapper">
          <div className="overlay"></div>
          <img
            src={galleryList[0].img}
            alt={galleryList[0].title}
            id="imageSlider"
          />
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => onClickEvent("previous")}>
            {"<"}
          </button>
          <button className="btn" onClick={() => onClickEvent("next")}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
