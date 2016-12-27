import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Heading from './Heading';

const Navigation = () => {
  const Wrapper = styled.div`
    background-color: teal;
    color: ivory;
    width: 20%;
    padding: 1em;
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
    color: ivory;
    text-decoration: none;
  `;

  const NavigationLink = styled(Link)`
    border-bottom: 1px solid ivory;
    color: ivory;
    display: block;
    font-weight: bolder;
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
          isActive={location => location.pathname === '/'}
          to="/"
        >
          React Redux Boilerplate
        </NavigationHeaderLink>
      </Heading>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            activeStyle={activeStyle}
            isActive={location => location.pathname === '/cats'}
            to="/cats"
          >
            Cats
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/forms">Forms</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/about">About</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Wrapper>
  );
};

export default Navigation;
