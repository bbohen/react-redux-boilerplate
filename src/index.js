import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MainContent, NotFound } from 'components';
import { App, Cats, Humans, FormWithCats, Home, Navigation } from 'containers';
import initializeStore from './redux/init';

import './globalStyles';

require('offline-plugin/runtime').install();

const store = initializeStore();

const Boilerplate = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Navigation />
        <MainContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cats" component={Cats} />
            <Route path="/form" component={FormWithCats} />
            <Route path="/humans" component={Humans} />
            <Route component={NotFound} />
          </Switch>
        </MainContent>
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <Boilerplate />,
  document.getElementById('mount'),
);

export default Boilerplate;
