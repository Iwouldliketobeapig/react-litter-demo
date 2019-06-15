import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';
import { List, fromJS } from 'immutable';

class UIList extends Component {
  constructor() {
    super();
    this.state = {
      list: List([1, 2])
    }
  }

  componentDidMount() {
    this.fromJS();
  }

  render () {
    return <div>
      <h6>fromJS()</h6>
      <div></div>
    </div>
  }

  fromJS = () => {
    const jsObj = {a: 1, b: 2};
    const immObj = fromJS(jsObj, (key, value, path) => {
      return value.toOrderedMap();
    });
    console.log(immObj);
  }
}

export default addTitle('常用api')(UIList)