import styled from 'styled-components';

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: ${({ error, theme, warning }) => {
    let color = theme.colors.primary;

    if (error) {
      color = theme.colors.secondary;
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  color: ${props => props.theme.colors.primary};
  flex-grow: 1;
  outline: none;
  padding: 1em;
  `;

export default Input;
