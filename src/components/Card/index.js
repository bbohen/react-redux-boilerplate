import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

const Card = ({ onClick, imageUrl, index }) => {
  const handleClick = onClick.bind(null, index);
  return (
    <Wrapper
      onClick={handleClick}
    >
      <img
        alt=""
        src={imageUrl}
      />
    </Wrapper>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: () => false,
  imageUrl: '',
};

export default Card;
