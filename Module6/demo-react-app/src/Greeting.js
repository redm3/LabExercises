import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'World',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const name = prompt('Please enter your name:');
    this.setState({ name: name || 'World' });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default Greeting;