import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    background-color:rgba(0, 0, 0, 0);
  }

  to {
    background-color:rgba(0, 0, 0, 0.75);
  }
`;

const Wrapper = styled.div`
  background-color:rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 250ms ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Wrapper;
