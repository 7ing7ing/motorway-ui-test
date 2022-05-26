import Card from "./Card";

const Cards = ({ images }) => {
  return (
    <div className="cards-container">
      {images &&
        images.map((img, index) => (
          <Card img={img} index={index} key={img.id} />
        ))}
    </div>
  );
};

export default Cards;
