import React, { Component } from 'react';

export default class ScoreHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  render() { 
    return ( 
      <section>
        <header>
          <h3>Rock</h3>
          <h3>Paper</h3>
          <h3>Scissors</h3>

          <aside>
            <small>Score</small>
            <p>42</p>
          </aside>
        </header>
      </section>
    );
  }
}
