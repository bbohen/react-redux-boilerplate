import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';
import Content from './Content';

const Modal = ({ children, onClick }) =>
  (<Wrapper onClick={onClick}>
    <Content>
      {children}
    </Content>
  </Wrapper>);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  onClick: () => false,
};

export default Modal;
