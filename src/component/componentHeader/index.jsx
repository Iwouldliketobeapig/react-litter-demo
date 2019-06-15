import React, { Component } from 'react';
const style = require('./index.module.scss');

const addTitle = (title) => {
  return (Com) => {
    return class AddTitle extends Component {

      componentDidCatch (error, info) {
        console.log('++++++++++++++++++++++++++++++++++++++++++');
      }

      render () {
        console.log(this.props);
        return (
          <div className={style['index']}>
            <h3 className={style['index-header']}>{title}</h3>
            <div>
              <Com {...this.props}/>
            </div>
          </div>
        )
      }
    }
  }
}

export default addTitle;

