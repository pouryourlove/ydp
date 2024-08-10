import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Class extends Component {
  render() {
    const {text, valid} = this.props;

    return (
      <div>
        <p>{text}</p>
        <button onClick={valid}>Check Validity</button>
      </div>
    )
  }
}

Class.propTypes = {
    text: PropTypes.string.isRequired
  };
  

Class.defaultProps = {
    text: '이건 기본 text props입니다.',
  };
