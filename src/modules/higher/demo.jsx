import React, { Component } from 'react';
import AddTitle from './addTitle.jsx';

class Higher extends Component {
  render () {
    return (
      <div>test</div>
    )
  }
}

// 高阶组件
Higher = AddTitle(Higher, '我是个赝品');

export default Higher;