import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';

class ErrorComponent extends Component {
  render () {
    return (
      <div>
        错误页面
      </div>
    )
  }
}

export default addTitle('捕获错误页面')(ErrorComponent);