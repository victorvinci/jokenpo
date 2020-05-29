import React, { Component } from 'react';
import { ScoreHeader, SelectOption, RulesModal, SelectedOption } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.selectOption = this.selectOption.bind(this);

    this.state = { 
      selected: null,
      housePick: null,
      options: ['rock', 'paper', 'scissor']
    };
  }

  pickForHouse() {
    const { options } = this.state;

    const housePick = options[Math.floor(Math.random()*options.length)];

    this.setState({
      housePick
    });
  }

  selectOption(option) {
    this.setState({
      selected: option
    }, () => this.pickForHouse());
  }

  render() { 
    const { selected, housePick } = this.state;

    return ( 
      <main>
        <ScoreHeader />

        { (!selected && !housePick) ? (
          <SelectOption 
            action={ this.selectOption }
          />
        ) : (
          <SelectedOption 
            selected={ selected }
            housePick={ housePick }
          />
        ) }

        <RulesModal />
      </main>
    );
  }
}