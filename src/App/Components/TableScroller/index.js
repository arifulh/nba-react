import React, { Component } from 'react';
import './styles.css';

class TableScroller extends Component {

  constructor() {
    super();
    this.state = {
      currentTop: 0,
      currentBot: 0,
      isScrolling: false
    }
    this.onScrollingHandler = this.onScrollingHandler.bind(this);    
  }

  onScrollingHandler(e) {

  }

  render() {
    const rows = this.props.data.map((p, i) => {
      let cells = Object.keys(p).map((key)  => {
        if (key !== 'meta' && key !== 'position' && key !== 'team') return (<div>{p[key]}</div>)
      })
      return (<div className="table-row"> { cells } </div>)
    });

    return (
      <div className="TableScroller">
        <div className="TableBody">{ rows }</div>
      </div>
    );
  }
}

export default TableScroller;
