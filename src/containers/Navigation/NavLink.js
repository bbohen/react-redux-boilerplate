import { NavLink as RRNavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(RRNavLink)`
  color: ${props => props.theme.colors.primary};
  display: block;
  text-decoration: none;
  text-transform: uppercase;
`;

export default NavLink;
