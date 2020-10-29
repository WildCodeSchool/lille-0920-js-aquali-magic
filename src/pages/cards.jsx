import React from 'react';
import axios from 'axios';
import CardList from '../components/cardlist';
import SearchRapide from '../components/search-rapide';

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

  render() {
    const { cards } = this.state;
    return (
      <div>
        <SearchRapide searchName={this.searchCard} />
        <div>
          <CardList cards={cards} />
        </div>
      </div>
    );
  }
}

export default Cards;
