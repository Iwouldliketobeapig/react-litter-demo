import React, { Component } from 'react';
import addTitle from 'src/component/componentHeader';


class DocumentFragment extends Component {

  componentDidMount () {
    this.createDocumnetFragment();
    console.log(this.props.match);
  }

  render () {
    return (
      <div id="fragment" ref="fragment">

      </div>
    )
  }

  createDocumnetFragment = () => {
    const baseElement = this.refs.fragment;
    const datas = ['chongqing', 'beijing', 'shanghai', 'nanjin'];
    let fragment = document.createDocumentFragment();
    datas.forEach(ele => {
      let elementP = document.createElement('p');
      elementP.innerHTML  = ele;
      fragment.appendChild(elementP);
    })
    baseElement.appendChild(fragment);
  }
}

export default addTitle('建一个document碎片')(DocumentFragment)