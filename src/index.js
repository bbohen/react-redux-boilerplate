import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NotFound } from 'components';
import { App, Cats, ErrorBoundary, FormWithCats, MainContent, Navigation } from 'containers';
import initializeStore from './redux/init';
import { light } from './theme';

import './globalStyles';

require('offline-plugin/runtime').install();

const store = initializeStore();

const Boilerplate = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={light}>
      <ErrorBoundary>
        <BrowserRouter>
          <App>
            <Navigation />
            <MainContent>
              <Switch>
                <Route exact path="/" component={Cats} />
                <Route path="/form" component={FormWithCats} />
                <Route component={NotFound} />
              </Switch>
            </MainContent>
          </App>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </ReduxProvider>
);

ReactDOM.render(
  <Boilerplate />,
  document.getElementById('mount'),
);

export default Boilerplate;
