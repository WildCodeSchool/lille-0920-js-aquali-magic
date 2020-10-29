import React from 'react';

class SearchRapide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchName(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Card Search..."
            value={text}
            onChange={this.onChange}
          />
        </form>
        {/* {this.props.cards.length > 0 && <Redirect to="/cartes" />} */}
      </div>
    );
  }
}
export default SearchRapide;
