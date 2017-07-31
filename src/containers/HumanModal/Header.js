import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin-bottom: 1em;
`;

export default Header;
