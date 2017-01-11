import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import { AppWrapper, MainContent, Navigation, NotFound } from './components';
import { Cats, FormWithCats, Home } from './containers';
import initializeStore from './redux/init';

import './setup.css';

const store = initializeStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper>
        <Navigation />
        <MainContent>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/cats" component={Cats} />
          <Match exactly pattern="/formWithCats" component={FormWithCats} />
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
