import React from 'react';
import GitHubIcon from 'react-icons/lib/fa/github';
import styled from 'styled-components';

import { PRIMARY_COLOR } from 'theme';

const Anchor = styled.a`
  color: ${PRIMARY_COLOR};
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
