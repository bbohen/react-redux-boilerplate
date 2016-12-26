import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Match, Miss } from 'react-router';
import styled from 'styled-components';

import 'normalize.css';

import Home from './containers/Home';
import NotFound from './components/NotFound';

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: Ivory;
  color: DarkSlateGray;
  padding: 1em;
`;

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <h1>React Redux Boilerplate</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cats">Cats</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Match exactly pattern="/" component={Home} />
      <Miss component={NotFound} />
    </Wrapper>
  </BrowserRouter>
);


ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
