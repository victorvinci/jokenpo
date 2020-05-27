import React, { Component } from 'react';
import { ScoreHeader, Button } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return ( 
      <main>
        <ScoreHeader />
        <Button />
      </main>
    );
  }
}