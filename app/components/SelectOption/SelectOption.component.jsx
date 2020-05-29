/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './_SelectOption.scss';
export default class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() { 
    const { action } = this.props;

    return ( 
      <section className="select">
        <option className="select-rock" value="rock" onClick={ () => action('rock') }>Rock</option>
        <option className="select-paper" value="paper" onClick={ () => action('paper') }>Paper</option>
        <option className="select-scissor" value="scissor" onClick={ () => action('scissor') }>Scissor</option>
      </section>
    );
  }
}