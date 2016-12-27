import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Match, Miss } from 'react-router';
import styled from 'styled-components';

import 'normalize.css';

import Home from './containers/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  background: Ivory;
  color: DarkSlateGray;
`;

const Content = styled.div`
  width: 80%;
  padding: 1em;
`;

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Navigation />
      <Content>
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </Content>
    </Wrapper>
  </BrowserRouter>
);


ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
