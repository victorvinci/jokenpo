import React, { Component } from 'react';
import { ScoreHeader, SelectOption, RulesModal, SelectedOption } from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.selectOption = this.selectOption.bind(this);
    this.clearScore = this.clearScore.bind(this);

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

  checkWinner(userPick, housePick) {
    if ( (userPick !== housePick) && (userPick === 'rock' && housePick === 'paper') || (userPick === 'paper' && housePick === 'scissor') || (userPick === 'scissor' && housePick === 'rock') ) {
      return 'House wins!';

    } else if ( userPick === housePick ) {
      return 'Draw';

    } else {
      return 'You win!';
    }
  }

  clearScore() {
    this.setState({
      selected: null,
      housePick: null
    });
  }

  render() { 
    const { selected, housePick, options } = this.state;

    return ( 
      <main>
        <ScoreHeader />

        { (!selected && !housePick) ? (
          <SelectOption 
            options={ options }
            action={ this.selectOption }
          />
        ) : (
          <SelectedOption 
            selected={ selected }
            housePick={ housePick }
            winner={ this.checkWinner(selected, housePick) }
            clearScore={ this.clearScore }
          />
        ) }

        <RulesModal />
      </main>
    );
  }
}