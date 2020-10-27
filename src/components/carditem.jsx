const CardItem = ({ name, imageUrl, text }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
      <img src={imageUrl} alt="card" />
    </div>
  );
};
export default CardItem;
