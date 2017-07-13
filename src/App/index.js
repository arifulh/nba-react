import React, { Component } from 'react';
import './styles.css';
import Data from './Data';
import Filters from './Components/Filters';
import TableScroller from './Components/TableScroller';


/**
 * 
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <TableScroller />
      </div>
    );
  }
}

export default App;