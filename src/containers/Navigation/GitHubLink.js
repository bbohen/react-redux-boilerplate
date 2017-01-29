import React from 'react';
import GitHubIcon from 'react-icons/lib/fa/github';
import styled from 'styled-components';

const Anchor = styled.a`
  color: teal;
  font-size: 2em;
  line-height: 0;
  margin-left: auto;
`;

const GitHubLink = () =>
  <Anchor
    href="https://github.com/bbohen/react-redux-boilerplate"
    target="_blank"
  >
    <GitHubIcon />
  </Anchor>;

export default GitHubLink;
