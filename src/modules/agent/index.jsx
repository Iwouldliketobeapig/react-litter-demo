import React, { Component } from 'react';

class EventAgent extends Component {
  constructor () {
    super();
    this.state = {
      list: [1, 2, 3, 4],
      target: '',
      currentTarget: ''
    }
  }

  render () {
    const { list, target, currentTarget } = this.state;
    return (
      <div>
        <ul className='agent' onClick={this.eventAgent}>
          {
            list.map(ele =>　{
              return <li id={ele} key={ele}>{ele}</li>;
            })
          }
        </ul>
        <p>target innerHTML: {target}</p>
        <p>target innerHTML: {currentTarget}</p>
      </div>
    )
  }

  eventAgent = (e) => {
    this.setState({
      target: e.target.innerHTML,
      currentTarget: e.currentTarget.innerHTML
    });
  }
}

export default EventAgent;