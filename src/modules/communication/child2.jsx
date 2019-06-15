import React, { Component } from 'react';

class Child2 extends Component {

  componentDidMount () {
    setTimeout(() => {this.props.msg('Child2 change parent msg')}, 1000)
  }
  render () {
    return (
      <div>
        <h6>this is Child2</h6>
      </div>
    )
  }
}

export default Child2;