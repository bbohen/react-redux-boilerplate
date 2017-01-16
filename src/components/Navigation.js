import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Heading from './Heading';

const Navigation = () => {
  const Wrapper = styled.div`
    // padding: 1em;
    background: Ivory;
    border-bottom: 1px solid teal;
    display: flex;
    justify-content: center;
  `;

  const NavigationContent = styled.div`
    padding: 1em;
    min-width: 1000px;
  `;

  const NavigationItem = styled.li`
    margin-left: 1em;
  `;

  const NavigationList = styled.ul`
    align-items: center;
    list-style: none;
    padding: 0;
    display: flex;
  `;

  const NavigationHeaderLink = styled(Link)`
    color: teal;
    text-decoration: none;
  `;

  const NavigationLink = styled(Link)`
    border-bottom: 1px solid ivory;
    color: teal;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
  `;

  const activeStyle = {
    borderBottom: '1px solid LightSalmon',
    color: 'LightSalmon',
  };

  return (
    <Wrapper>
      <NavigationContent>
        <NavigationList>
          <Heading>
            <NavigationHeaderLink
              activeStyle={{ color: 'LightSalmon' }}
              isActive={({ pathname }) => pathname === '/'}
              to="/"
            >
              React Redux Boilerplate
            </NavigationHeaderLink>
          </Heading>
          <NavigationItem>
            <NavigationLink
              activeStyle={activeStyle}
              isActive={({ pathname }) => pathname === '/cats'}
              to="/cats"
            >
              Cats
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              activeStyle={activeStyle}
              isActive={({ pathname }) => pathname === '/formWithCats'}
              to="/formWithCats"
            >
              Form with cats
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContent>
    </Wrapper>
  );
};

const contextTypes = {
  router: PropTypes.object,
};

Navigation.contextTypes = contextTypes;

export default Navigation;
