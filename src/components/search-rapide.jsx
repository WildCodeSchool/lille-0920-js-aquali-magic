import React from 'react';

class SearchRapide extends React.Component {
  constructor() {
    super();
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
      </div>
    );
  }
}
export default SearchRapide;
