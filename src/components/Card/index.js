import PropTypes from 'prop-types';
import React from 'react';

import Img from './Img';
import Wrapper from './Wrapper';

const Card = ({ onClick, imageUrl, index }) => {
  const handleClick = onClick.bind(null, index);
  return (
    <Wrapper
      onClick={handleClick}
    >
      <Img
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
