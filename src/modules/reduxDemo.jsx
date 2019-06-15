import React, { Component } from 'react';
import store from '../store';

// redux计数器
class ReduxDemo extends Component {

  componentDidMount () {
    document.domain="localhost"
    window.parent.location.hash="hahahtest";
  }

  add () {
    store.dispatch({type: 'add'});
  }

  less () {
    store.dispatch({type: 'less'});
  }

  render () {
    return (
      <div>
        <h3>this is a counter</h3>
        <span>this ia the count {store.getState()}</span>
        <button onClick={this.add}> + </button>
        <button onClick={this.less}> - </button>
      </div>
    )
  }
}

export default ReduxDemo;

// export default connect(state => state)(ReduxDemo);