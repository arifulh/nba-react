import React, { Component } from 'react';
import './styles.css';

import Data from './Data';
import Filters from './Components/Filters';
import TableScroller from './Components/TableScroller';

class App extends Component {

  constructor() {
    super()
    this.state = { data:  Data.findAll() }; // temporary
    this.handleFilterResults = this.handleFilterResults.bind(this);
  }

  handleFilterResults(res) {
    let data = Data.findAll();
    this.setState({ data: });
  }

  render() {
    return (
      <div id="container">
        <div className="leftPane">
          <Filters onResults={this.handleFilterResults} />
        </div>
        <div className="rightPane">
          <TableScroller data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;