import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';

class LifeCycle extends Component {

  render () {
    const a = undefined;
    console.log(a.b);
    return (
      <div>
        <button onClick={this.trigger}>触发componentDidCatch</button>
      </div>
    )
  }

  trigger = () => {
    const a = undefined;
    console.log(a.b);
  }
}

export default addTitle('react生命周期')(LifeCycle);