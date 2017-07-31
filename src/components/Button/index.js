import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  padding: 1em;
`;

export default Button;
