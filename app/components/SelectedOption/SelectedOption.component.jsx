/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class SelectedOption extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() { 
    const { selected, housePick } = this.props;

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
      </section>
    );
  }
}