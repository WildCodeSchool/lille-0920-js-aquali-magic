import React from 'react';
import axios from 'axios';
import CardList from '../components/cardlist';
import Spinner from '../components/spinner';
import SearchRapide from '../components/search-rapide';

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      loading: false,
    };
  }

  searchCard = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${text}`
    );
    this.setState({ cards: res.data.cards, loading: false });
  };

  render() {
    const { loading, cards } = this.state;
    return (
      <div>
        <SearchRapide searchName={this.searchCard} />
        <div>{loading ? <Spinner /> : <CardList cards={cards} />}</div>
      </div>
    );
  }
}

export default Cards;
