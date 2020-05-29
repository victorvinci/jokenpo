/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const { name, action } = this.props;

    return ( 
      <div>
        <button onClick={ () => action() }> { name } </button>
      </div>
    );
  }
}