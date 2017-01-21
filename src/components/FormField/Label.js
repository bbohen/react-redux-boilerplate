import styled from 'styled-components';

const Label = styled.div`
  color: ${({ error, warning }) => {
    if (error) {
      return 'lightSalmon';
    } else if (warning) {
      return 'yellow';
    }

    return 'teal';
  }}
`;

export default Label;
