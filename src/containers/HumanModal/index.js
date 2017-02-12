import React, { PropTypes } from 'react';
import styled from 'styled-components';

import EnvelopeIcon from 'react-icons/lib/fa/envelope';
import BirthdayIcon from 'react-icons/lib/fa/birthday-cake';
import PhoneIcon from 'react-icons/lib/fa/phone';

import { Heading, Modal } from 'components';
import Details from './Details';
import Header from './Header';
import Icon from './Icon';
import Image from './Image';

const ModalHeaderHeading = styled(Heading)`
  margin-bottom: .5em;
`;

const HumanModal = ({ age, bio, birthday, imageUrl, email, name, phone, onClick, surname }) =>
  <Modal onClick={onClick}>
    <Header>
      <Image
        alt=""
        src={imageUrl}
      />
      <Details>
        <ModalHeaderHeading>{name}, {surname}</ModalHeaderHeading>
        <div>
          <Icon>
            <EnvelopeIcon />
          </Icon>
          {email}
        </div>
        <div>
          <Icon>
            <BirthdayIcon />
          </Icon>
          {birthday.mdy} ({age} years old)
        </div>
        <div>
          <Icon>
            <PhoneIcon />
          </Icon>
          {phone}
        </div>
      </Details>
    </Header>
    <div>{bio}</div>
  </Modal>;

HumanModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  age: PropTypes.number,
  bio: PropTypes.string,
  birthday: PropTypes.shape({
    mdy: PropTypes.string,
  }),
  email: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  surname: PropTypes.string,
};

HumanModal.defaultProps = {
  age: 0,
  bio: '',
  birthday: {
    mdy: 'XX/XX/XXXX',
  },
  email: '',
  imageUrl: '',
  name: '',
  phone: '',
  surname: '',
};
export default HumanModal;
