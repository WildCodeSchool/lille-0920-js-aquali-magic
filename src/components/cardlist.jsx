// eslint-disable jsx-props-no-spreading
import CardItem from './carditem';

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => {
        if (card.foreignNames.length === 0) {
          return null;
        }
        return <CardItem key={card.id} {...card} />;
      })}
    </div>
  );
};
export default CardList;
