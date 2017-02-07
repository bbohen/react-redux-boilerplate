import { Link } from 'react-router';
import styled from 'styled-components';

import { PRIMARY_COLOR } from 'theme';

const NavLink = styled(Link)`
  color: ${PRIMARY_COLOR};
  display: block;
  text-decoration: none;
  text-transform: uppercase;
`;

export default NavLink;
