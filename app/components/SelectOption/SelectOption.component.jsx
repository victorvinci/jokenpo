/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import './_SelectOption.scss';
export default class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() { 
    const { action, options } = this.props;

    return ( 
      <section className="select">
        {options.map(option => {
          return <option key={ option } className={ `select-${option}` } value={ option } onClick={ () => action(option) }>{ option }</option>;
        })}
      </section>
    );
  }
}