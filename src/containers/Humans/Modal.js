import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { Heading, Modal } from '../../components';
import ModalHeaderDetails from './ModalHeaderDetails';
import ModalHeader from './ModalHeader';
import ModalImage from './ModalImage';

const ModalHeaderHeading = styled(Heading)`
  margin-bottom: 1em;
`;

const HumanModal = ({ age, bio, birthday, imageUrl, email, name, phone, onClick, surname }) =>
  <Modal onClick={onClick}>
    <ModalHeader>
      <ModalImage
        alt=""
        src={imageUrl}
      />
      <ModalHeaderDetails>
        <ModalHeaderHeading>{name}, {surname}</ModalHeaderHeading>
        <div>Email: {email}</div>
        <div>Age: {age} (DOB: {birthday.mdy})</div>
        <div>Phone: {phone}</div>
      </ModalHeaderDetails>
    </ModalHeader>
    <div>{bio}</div>
  </Modal>;

HumanModal.propTypes = {
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  birthday: PropTypes.shape({
    mdy: PropTypes.string,
  }).isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};

export default HumanModal;
