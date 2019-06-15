import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

class Parent extends Component {
  constructor () {
    super();
    this.state = {
      msg: 'storage in parent msg'
    }
  }

  childChangeMsg = (msg) => {
    this.setState({msg})
  }

  render () {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* 父组件向字组件传数据 */}
        <Child1 msg={this.state.msg}/>
        {/* 子组件向父组件传数据 */}
        <Child2 msg={(msg) => {this.childChangeMsg(msg)}}/>
      </div>
    );
  }
}

export default Parent;