import styled from 'styled-components';

const Feedback = styled.div`
  border: ${({ error, theme, warning }) => {
    let color = theme.colors.primary;

    if (error) {
      color = theme.colors.seconday;
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
