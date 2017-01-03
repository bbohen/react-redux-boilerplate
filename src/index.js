import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import './setup.css';

import Cats from './containers/Cats';
import Home from './containers/Home';
import AppWrapper from './components/AppWrapper';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import initializeStore from './redux/init';

const store = initializeStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper>
        <Navigation />
        <MainContent>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/cats" component={Cats} />
          <Miss component={NotFound} />
        </MainContent>
      </AppWrapper>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(
  <App />,
  document.getElementById('mount'),
);
