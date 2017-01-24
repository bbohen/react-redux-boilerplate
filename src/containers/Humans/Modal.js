import React, { PropTypes } from 'react';

import { Modal } from '../../components';

const HumanModal = ({ imageUrl, email, name, onClick, surname }) =>
  <Modal onClick={onClick}>
    <img
      alt=""
      src={imageUrl}
    />
    <div>{name}, {surname}</div>
    <div>{email}</div>
  </Modal>;

HumanModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  email: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
};

HumanModal.defaultProps = {
  email: '',
  name: '',
  surname: '',
  imageUrl: '',
};

export default HumanModal;
