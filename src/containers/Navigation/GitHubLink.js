import React from 'react';
import GitHubIcon from 'react-icons/lib/fa/github';
import styled from 'styled-components';

const Anchor = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 2em;
  line-height: 0;
  margin-left: auto;
  ${props => props.theme.mediaQueries.smallerScreen`
    margin-left: 0;
  `}
`;

const GitHubLink = () =>
  (<Anchor
    href="https://github.com/bbohen/react-redux-boilerplate"
    target="_blank"
  >
    <GitHubIcon />
  </Anchor>);

export default GitHubLink;
