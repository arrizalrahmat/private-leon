import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigRedText from './components/atoms/BigRedText';

class HeroName extends Component {
  constructor() {
    super();
    this.country = 'Indonesia';
  }
  render() {
    return (
      <BigRedText
        text={`Hero: ${this.props.heroName}, Age: ${this.props.age}`}
      />
    );
  }
}

HeroName.propTypes = {
  heroName: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: 'Arrizal Rahmat Kurniawan!!!',
      count: 0,
    };
  }

  getFullName() {
    return this.state.fullName;
  }

  setFullName(str) {
    this.setState({ fullName: str });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.getFullName()}</h1>
        <button
          onClick={() => {
            this.setFullName('Maman surahman');
          }}
        >
          Set Full Name
        </button>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
        <HeroName heroName="Himawari" age={true} />
      </div>
    );
  }
}

export default App;
