import React, {Component} from 'react';
const style = require('./index.module.scss');

class Child extends Component {
  constructor () {
    super();
    this.state = {
      fromParent: '',
      ownDate: 'own state',
    }
  }

  static getDerivedStateFromProps (props, state) {
    return {
      fromParent: `from parent: ${props.view}`
    }
  }

  getSnapshotBeforeUpdate (preProps, preState) {
    return undefined;
  }

  render () {
    const { fromParent } = this.state;
    return (
      <div className={style.child}>
        {fromParent}
      </div>
    )
  }
}

export default Child;