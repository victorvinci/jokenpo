import React, { Component } from 'react';

export default class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() { 
    return ( 
      <section>
        <option value="rock">Rock</option>
        <option value="paper">Paper</option>
        <option value="scissor">Scissor</option>
      </section>
    );
  }
}