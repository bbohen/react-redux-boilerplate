import React, { PropTypes } from 'react';

import { Heading } from 'components';
import Wrapper from './Wrapper';
import Content from './Content';
import GitHubLink from './GitHubLink';
import List from './List';
import Item from './Item';
import LogoLink from './LogoLink';
import NavLink from './NavLink';

const activeStyle = {
  color: 'LightSalmon',
};

const Navigation = () =>
  <Wrapper>
    <Content>
      <Heading>
        <LogoLink
          isActive={({ pathname }) => pathname === '/'}
          to="/"
        >
          React Redux Boilerplate
        </LogoLink>
      </Heading>
      <List>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            isActive={({ pathname }) => pathname === '/cats'}
            to="/cats"
          >
            Cats
          </NavLink>
        </Item>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            isActive={({ pathname }) => pathname === '/humans'}
            to="/humans"
          >
            Humans
          </NavLink>
        </Item>
        <Item>
          <NavLink
            activeStyle={activeStyle}
            isActive={({ pathname }) => pathname === '/form'}
            to="/form"
          >
            Form
          </NavLink>
        </Item>
      </List>
      <GitHubLink />
    </Content>
  </Wrapper>;

const contextTypes = {
  router: PropTypes.object,
};

Navigation.contextTypes = contextTypes;

export default Navigation;
