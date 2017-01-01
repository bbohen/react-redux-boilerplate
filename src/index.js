import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';
import styled from 'styled-components';

import 'normalize.css';

import Cats from './containers/Cats';
import Home from './containers/Home';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import initializeStore from './redux/init';

// TODO: Split these out into components?
const Wrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  background: Ivory;
  color: DarkSlateGray;
`;

const Content = styled.div`
  border: 1px solid LightSalmon;
  width: 80%;
  margin: 1em 1em 1em 0;
  padding: 1em;
`;

const store = initializeStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Navigation />
        <Content>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/cats" component={Cats} />
          <Miss component={NotFound} />
        </Content>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
