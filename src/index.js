import React from 'react';
import { render } from 'react-dom';
import './style.scss';

const App = () => {
  return (
    <div>
      <h3>React App</h3>
    </div>
  );
}

render(<App />, document.getElementById('app'));