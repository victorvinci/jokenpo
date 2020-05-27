import React, { Component } from 'react';

import './_SelectOption.scss';
export default class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return ( 
      <section className="select">
        <option className="select-rock" value="rock">Rock</option>
        <option className="select-paper" value="paper">Paper</option>
        <option className="select-scissor" value="scissor">Scissor</option>
      </section>
    );
  }
}