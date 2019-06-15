import React, { Component } from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header
        className={style.header}
      >
        <div className={style['header-left']}>
          <Link to='/react'>react</Link>
        </div>
      </header>
    )
  }
}

export default Header;