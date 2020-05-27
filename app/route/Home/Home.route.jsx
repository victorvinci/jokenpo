import React, { Component } from 'react';
import { ScoreHeader, SelectOption, RulesModal } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return ( 
      <main>
        <ScoreHeader />
        <SelectOption />
        <RulesModal />
      </main>
    );
  }
}