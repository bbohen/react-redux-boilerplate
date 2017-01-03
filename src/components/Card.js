import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const CardWrapper = styled.div`
    padding: 20px;
  `;

  return (
    <CardWrapper>
      {props.children}
    </CardWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.shape,
};

export default Card;
