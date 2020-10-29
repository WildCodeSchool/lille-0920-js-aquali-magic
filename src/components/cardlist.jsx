// eslint-disable jsx-props-no-spreading
import CardItem from './carditem';

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
  justifyItems: 'center',
};

const CardList = ({ cards }) => {
  return (
    <div className="cards" style={cardStyle}>
      {cards
        .filter((card, i) => {
          return i < 5;
        })
        .map((card) => {
          if (card.foreignNames.length === 0) {
            return null;
          }
          return <CardItem key={card.id} {...card} />;
        })}
    </div>
  );
};

export default CardList;
