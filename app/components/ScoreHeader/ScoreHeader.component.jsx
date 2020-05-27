import React, { Component } from 'react';

import './_ScoreHeader.scss';
export default class ScoreHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0 
    };
  }

  render() {
    const { score } = this.state;
    return ( 
      <section className="score">
        <header className="score-header">
          <div className="score-text">
            <h3>Rock</h3>
            <h3>Paper</h3>
            <h3>Scissors</h3>
          </div>

          <aside className="score-value">
            <small>Score</small>
            <p>{ score }</p>
          </aside>
        </header>
      </section>
    );
  }
}
