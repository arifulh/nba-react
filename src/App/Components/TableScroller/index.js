import React, { Component } from 'react';
import './styles.css';

class TableScroller extends Component {

  constructor() {
    super();
    this.state = {
      currentTop: 0,
      currentBot: null
    }
    this.scrolling = false;
    this.scrollingTimer = null;
    this.lastScroll = Date.now();
    this.onScrollingHandler = this.onScrollingHandler.bind(this);    
  }

  onScrollingHandler(e) {
    if (this.scrolling ) return;
    let top = Math.floor((this.refs.scroller.scrollTop/this.props.rowHeight));
    let bot = top+this.props.visibleRows ;
    if (bot < top+bot) 
      this.setState({ currentTop: top, currentBot: top+bot },
        function() {
          this.scrolling = false
        }.bind(this), 100)
  } 

  render() {
    const top =  this.state.currentTop
    const bot = this.state.currentBot || (top+this.props.visibleRows)

    const rows = this.props.data.slice(top, bot).map((p, i) => {
        let cells = Object.keys(p).filter((key) => {
          return (key !== '$loki' && key !== 'age' && key !== 'meta') 
        }).map((key)  => {
          return (<td className={key.replace('%','') }>{ key === 'player' ? i+'.' : '' } {p[key]}</td>)
        })
        return (<tr key={i} >  { cells } </tr>)
      });

    return (
      <div ref="scroller" className="TableScroller" onScroll={this.onScrollingHandler}>
        <table margin={0} padding={0} border={0}>
        <tbody>{ rows }</tbody>
        </table>
      </div>
    );
  }
}

export default TableScroller;
