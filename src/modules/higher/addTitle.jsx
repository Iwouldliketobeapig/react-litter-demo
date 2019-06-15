import React, { Component } from 'react';

const addTitle = (InnerComponent, title) => {
  return class Addtitle extends Component {
    render () {
      return (
        <div>
          <h3>{title}</h3>
          <InnerComponent {...this.props}/>
        </div>
      );
    }
  }
}

export default addTitle;