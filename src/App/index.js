import React, { Component } from 'react';
import './styles.css';

import Data from './Data';
import Filters from './Components/Filters';
import TableScroller from './Components/TableScroller';

class App extends Component {

  constructor() {
    super()
    this.state = { data:  Data.findAll() }; // temporary
    this.onFilterHandler = this.onFilterHandler.bind(this);
  }

  onFilterHandler(res) {
    let data = Data.findAll();
    this.setState({ data: data });
  }

  render() {
    return (
      <div id="container">
        <div className="leftPane">
          <Filters  />
        </div>
        <div className="rightPane">
          <TableScroller rowHeight={30} visibleRows={15} data={ this.state.data } />
        </div>
      </div>
    );
  }
}

export default App;