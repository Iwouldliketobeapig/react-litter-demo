import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';
const style = require('./index.module.scss');

class Transition extends Component {
  render () {
    return (
      <div className={style['trans']}>
        <div className={style['trans-demo1']}>demo1</div>
        <div className={style['trans-delay']}>delay</div>
        <div className={style['trans-linear']}>timing-function: linear</div>
        <div className={style['trans-ease']}>timing-function: ease</div>
        <div className={style['trans-ease-in']}>timing-function: ease-in</div>
        <div className={style['trans-ease-out']}>timing-function: ease-out</div>
        <div className={style['trans-ease-in-out']}>timing-function: ease-in-out</div>
        <div className={style['trans-cubic-bezier']}>timing-function: cubic-bezier</div>
      </div>
    )
  }
}

export default addTitle('transition')(Transition)