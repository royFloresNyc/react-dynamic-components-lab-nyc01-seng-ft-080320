import React, { Component } from 'react';
import Colorbox from './ColorBox.js';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        { this.props.opacity >= 0.2 ? <Colorbox opacity={this.props.opacity - 0.1}/> :null} 
      </div>
    )
  }

}

