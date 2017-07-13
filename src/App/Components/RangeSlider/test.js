import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RangeSlider />, div);
});
