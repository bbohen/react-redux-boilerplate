import styled from 'styled-components';

const Feedback = styled.div`
  border: ${({ error, warning }) => {
    let color = 'teal';

    if (error) {
      color = 'lightSalmon';
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  width: 100%;
  padding: 1em;
  margin-top: 1em;
`;

export default Feedback;
