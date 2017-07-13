import React from 'react';
import ReactDOM from 'react-dom';
import TableScroller from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableScroller />, div);
});
