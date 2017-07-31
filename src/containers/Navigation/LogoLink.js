import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(NavLink)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

export default LogoLink;
