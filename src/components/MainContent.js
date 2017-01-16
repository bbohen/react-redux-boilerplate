import React, { PropTypes } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  color: teal;
  display: flex;
  justify-content: center;
  margin: 1em;
  padding: 1em;
`;

const Content = styled.div`
  width: 1000px;
`;

const MainContent = ({ children }) => (
  <MainWrapper>
    <Content>
      {children}
    </Content>
  </MainWrapper>
);

MainContent.propTypes = {
  children: PropTypes.array,
};

export default MainContent;
