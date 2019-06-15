import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReactNavs extends Component {
  render () {
    return (
      <ul>
        <li><Link to='/'>redux demo</Link></li>
        <li><Link to='/props'>component communication</Link></li>
        <li><Link to='/higher'>higher component</Link></li>
        <li><Link to='/eventagent'>Event Agent</Link></li>
      </ul>
    )
  }
}

export default ReactNavs;