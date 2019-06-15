import React, { Component } from 'react';
import Child1Child1 from './child1_child';

class Child1 extends Component {
  render () {
    return (
      <div>
        <h6>this is Child1</h6>
        <strong>come from parent {this.props.msg}</strong>
        <Child1Child1 {...this.props}/>
      </div>
    )
  } 
}

export default Child1;