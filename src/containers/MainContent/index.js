import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Content from './Content';

const MainContent = ({ children }) => (
  <Wrapper>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

MainContent.propTypes = {
  children: PropTypes.element,
};

MainContent.defaultProps = {
  children: [],
};

export default MainContent;
