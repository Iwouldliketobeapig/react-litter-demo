import React, { Component } from 'react';
const style = require('./index.module.scss');

const addTitle = (title) => {
  return (Com) => {
    return class AddTitle extends Component {
      constructor () {
        super();
        this.state = {
          childernHasError: false,
          error: '',
          info: ''
        }
      }

      componentDidCatch (error, info) {
        this.setState({
          childernHasError: true,
          error,
          info
        });
      }

      render () {
        const { childernHasError, info } = this.state;
        return (
          <div className={style['index']}>
            {
              childernHasError ? 
              <>
                <h3 className={style['index-header']}>错误信息</h3>
                <div>
                  <p>component: {info.componentStack}</p>
                </div>1
              </> :
              <>
                <h3 className={style['index-header']}>{title}</h3>
                <div>
                  <Com {...this.props}/>
                </div>
              </>
            }
          </div>
        )
      }
    }
  }
}

export default addTitle;

