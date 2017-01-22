import React, { PropTypes } from 'react';

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
  children: PropTypes.arrayOf(PropTypes.element),
};

export default MainContent;
