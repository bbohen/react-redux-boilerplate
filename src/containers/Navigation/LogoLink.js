import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

export default LogoLink;
