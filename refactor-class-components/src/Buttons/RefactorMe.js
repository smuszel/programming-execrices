import * as React from 'react';

export default class IncButton extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.increment = () => this.setState({ value: this.state.value + 1 });
  }

  componentDidMount() {
    this.setState({ value: Number(localStorage.value) || 0 });
  }

  componentDidUpdate() {
    localStorage.setItem('value', this.state.value);
  }

  componentWillUnmount() {
    const shouldReset = window.confirm('Reset?');

    shouldReset && localStorage.clear();
  }

  render() {
    return (
      <button style={{ width: 100, height: 100 }} onClick={this.increment}>
        {this.state.value}
      </button>
    );
  }
}
