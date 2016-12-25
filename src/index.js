import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './containers/Home';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>React Redux Boilerplate</h1>
      <Match pattern="/" component={Home} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);


ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
