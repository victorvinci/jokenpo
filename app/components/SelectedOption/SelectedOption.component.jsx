/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button } from '../../components';

export default class SelectedOption extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() { 
    const { selected, housePick, winner, clearScore } = this.props;

    return ( 
      <section className="selected">
        <div>
          <p>You picked</p>
          <span>{ selected }</span>
        </div>

        <div>
          <p>The house picked</p>
          <span>{ housePick }</span>
        </div>

        <h3>{ winner }</h3>

        <Button 
          name={ 'Play Again' }
          action={ clearScore }
        />
      </section>
    );
  }
}