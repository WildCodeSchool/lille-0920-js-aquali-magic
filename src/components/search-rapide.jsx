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
    const { showClear, clearCards } = this.props;
    return (
      <div>
        <form className="search-rapid" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder=" Rapid Card Search..."
            value={text}
            onChange={this.onChange}
          />
        </form>
        {showClear && (
          <button type="button" className="btn-clear" onClick={clearCards}>
            Clear
          </button>
        )}
        {/* {this.props.cards.length > 0 && <Redirect to="/cartes" />} */}
      </div>
    );
  }
}
export default SearchRapide;
