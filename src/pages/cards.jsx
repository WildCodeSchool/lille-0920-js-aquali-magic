import React from 'react';
import axios from 'axios';
import CardList from '../components/cardlist';
import SearchRapide from '../components/search-rapide';
import './cards.scss';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  searchCard = async (text) => {
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${text}`
    );
    this.setState({ cards: res.data.cards });
  };

  //  clear cards
  clearCards = () =>
    this.setState({
      cards: [],
    });

  render() {
    const { cards } = this.state;
    return (
      <div className="search-container">
        <SearchRapide
          searchName={this.searchCard}
          showClear={cards.length > 0}
          clearCards={this.clearCards}
        />
        <div>
          <CardList cards={cards} />
        </div>
      </div>
    );
  }
}

export default Cards;
