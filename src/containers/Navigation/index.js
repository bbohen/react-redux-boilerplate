import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Heading } from 'components';

import Wrapper from './Wrapper';
import Content from './Content';
import GitHubLink from './GitHubLink';
import List from './List';
import Item from './Item';
import LogoLink from './LogoLink';
import NavLink from './NavLink';

const Navigation = (props) => {
  const activeStyle = {
    textShadow: `-1px -1px 3px ${props.theme.colors.secondary}`,
  };
  return (<Wrapper>
    <Content>
      <Heading>
        <LogoLink
          activeStyle={activeStyle}
          to="/"
        >
          React Redux Boilerplate
        </LogoLink>
      </Heading>
      <List>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            to="/cats"
          >
            Cats
          </NavLink>
        </Item>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            to="/humans"
          >
            Humans
          </NavLink>
        </Item>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            to="/form"
          >
            Form
          </NavLink>
        </Item>
      </List>
      <GitHubLink />
    </Content>
  </Wrapper>);
};

Navigation.contextTypes = {
  router: PropTypes.object,
};

Navigation.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      secondary: PropTypes.string,
    }),
  }).isRequired,
};

export default withTheme(Navigation);
