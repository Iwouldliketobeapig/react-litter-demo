import React, { Component } from 'react';
import UIList from './list.jsx';
const style = require('./index.module.scss');

class ReactNavs extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className={style['immutable']}>
        <UIList />
      </div>
    )
  }

  list = () => {
    return (
      <div>
        hahah
      </div>
    )
  }
}

export default ReactNavs;