import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PRIMARY_COLOR } from 'theme';

const LogoLink = styled(Link)`
  color: ${PRIMARY_COLOR};
  text-decoration: none;
`;

export default LogoLink;
