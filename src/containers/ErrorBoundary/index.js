import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { App, MainContent } from 'containers';
import { Heading } from 'components';

const ErrorHeading = Heading.extend`
  margin-bottom: 40px;
`;

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <App>
          <MainContent>
            <div>
              <ErrorHeading>
              Whoops!
              </ErrorHeading>
              <div>{this.state.error.name}</div>
              <div>{this.state.error.message}</div>
              <div>{this.state.error.type}</div>
              <div>{this.state.error.arguments}</div>
            </div>
          </MainContent>
        </App>
      );
    }
    return this.props.children;
  }
}
