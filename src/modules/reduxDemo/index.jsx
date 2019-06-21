import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, less } from 'src/store/action/count.js';
import style from './index.module.scss';

// redux计数器
class ReduxDemo extends Component {

  componentDidMount () {
    document.domain="localhost"
    window.parent.location.hash="hahahtest";
    console.log(this.props);
  }

  add = () => {
    this.props.dispatch(add());
  }

  less = () => {
    this.props.dispatch(less());
  }

  thunkDispathc = () => {
    this.props.dispatch(function (dispatch, getState) {
      dispatch({type: 'add'});
      dispatch({type: 'add'});
      setTimeout(() => { dispatch({type: 'less'})}, 2000);
    })
  }

  render () {
    return (
      <div>
        <h3>this is a counter</h3>
        <span>this ia the count {this.props.count}</span>
        <button className={`${style['redux-but']} button-default`} onClick={this.add}> + </button>
        <button className={`${style['redux-but']} button-default`} onClick={this.less}> - </button>
        <button className={`${style['redux-but']} button-default`} onClick={this.thunkDispathc}>触发thunk</button>
      </div>
    )
  }
}

export default connect(state => state)(ReduxDemo);

// export default connect(state => state)(ReduxDemo);