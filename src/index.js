import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Miss } from 'react-router';

import { MainContent, NotFound } from 'components';
import { App, Cats, Humans, FormWithCats, Home, Navigation } from 'containers';
import initializeStore from './redux/init';

import './globalStyles';

const store = initializeStore();

const Boilerplate = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Navigation />
        <MainContent>
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/cats" component={Cats} />
          <Match exactly pattern="/form" component={FormWithCats} />
          <Match exactly pattern="/humans" component={Humans} />
          <Miss component={NotFound} />
        </MainContent>
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Boilerplate />,
  document.getElementById('mount'),
);
