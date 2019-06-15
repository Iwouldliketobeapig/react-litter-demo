import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';
const style = require('./index.module.scss');

class Animation extends Component {
  render () {
    return (
      <div>
        <div className={style['ani-demo']}></div>
      </div>
    )
  }
}

export default addTitle('animation')(Animation)
