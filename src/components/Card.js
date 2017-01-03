import React from 'react';
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

export default Card;
