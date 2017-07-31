import styled from 'styled-components';

const Label = styled.div`
  color: ${({ error, theme, warning }) => {
    if (error) {
      return theme.colors.secondary;
    } else if (warning) {
      return 'yellow';
    }

    return theme.colors.primary;
  }}
`;

export default Label;
