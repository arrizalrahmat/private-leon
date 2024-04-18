import React, { Component } from 'react';
import PropTypes from 'prop-types';

//haram hukumnya hit API dari reusable component

export default class BigRedText extends Component {
  render() {
    return (
      <h1 style={{ color: 'red' }}>{this.props.text}</h1>
    );
  }
}

BigRedText.propTypes = {
  text: PropTypes.string,
};
