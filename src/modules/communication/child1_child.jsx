import React, { Component } from 'react';

class Child1_Child1 extends Component {
  render () {
    return (
      <div>
        <h6>this is Child1_Child1</h6>
        <strong>come from parent {this.props.msg}</strong>
      </div>
    )
  }
}

export default Child1_Child1;