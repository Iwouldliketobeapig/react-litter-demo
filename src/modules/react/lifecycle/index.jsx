import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';
import Child from './child';
const style = require('./index.module.scss');

class LifeCycle extends Component {
  constructor () {
    super();
    this.state = {
      isTargetCatch: {a: false},
      goChild: 'to view',
    }
  }

  render () {
    const { isTargetCatch, goChild} = this.state;
    console.log(isTargetCatch.a);
    return (
      <div className={style['lifecycle']}>
        <button className="button-default" onClick={this.trigger}>触发componentDidCatch</button>
        <button className="button-default" onClick={this.updateGoChild}>更新一下goChild</button>
        <Child view={goChild}/>
      </div>
    )
  }

  // 触发一个渲染阶段的错误
  trigger = () => {
    this.setState({
      isTargetCatch: undefined
    });
  }

  // 手动更新Child
  updateGoChild = () => {
    let randomDate = 'to view' + new Date().getTime();
    this.setState({
      goChild: randomDate
    });
  }
}

export default addTitle('react生命周期')(LifeCycle);