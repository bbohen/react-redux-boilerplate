import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

const Card = props =>
  <Wrapper>
    {props.children}
  </Wrapper>;

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
