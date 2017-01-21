import styled from 'styled-components';

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: ${({ error, warning }) => {
    let color = 'teal';

    if (error) {
      color = 'lightSalmon';
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  color: teal;
  flex-grow: 1;
  outline: none;
  padding: 1em;
`;

export default Input;
