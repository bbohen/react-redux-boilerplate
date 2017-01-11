import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Heading from './Heading';

const Navigation = () => {
  const Wrapper = styled.div`
    width: 20%;
    padding: 1em 0 1em 1em;
  `;

  const NavigationItem = styled.li`
    padding-bottom: 1em;
    margin-bottom: 1em;
  `;

  const NavigationList = styled.ul`
    list-style: none;
    padding: 0;
  `;

  const NavigationHeaderLink = styled(Link)`
    color: teal;
    text-decoration: none;
    font-weight: 300;
  `;

  const NavigationLink = styled(Link)`
    border-bottom: 1px solid ivory;
    color: teal;
    display: block;
    font-weight: 300;
    letter-spacing: 3px;
    text-decoration: none;
    text-transform: uppercase;
  `;

  const activeStyle = {
    borderBottom: '1px solid LightSalmon',
    color: 'LightSalmon',
  };

  return (
    <Wrapper>
      <Heading>
        <NavigationHeaderLink
          activeStyle={{ color: 'LightSalmon' }}
          isActive={location => location && location.pathname === '/'}
          to="/"
        >
          React Redux Boilerplate
        </NavigationHeaderLink>
      </Heading>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            activeStyle={activeStyle}
            isActive={location => location && location.pathname === '/cats'}
            to="/cats"
          >
            Cats
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/formWithCats">Form with cats</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/about">About</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Wrapper>
  );
};

const contextTypes = {
  router: PropTypes.object,
};

Navigation.contextTypes = contextTypes;

export default Navigation;
