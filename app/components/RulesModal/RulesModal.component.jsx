import React, { Component } from 'react';
import { Button } from '../../components';

export default class RulesModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() { 
    return ( 
      <section>
        <Button />
        <h3>Rules</h3>
      </section>
    );
  }
}