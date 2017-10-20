import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { FormField } from 'components';
import { clearRandomCat, giveRandomCat } from '../../redux/modules/cats';
import validation from './validation';
import ActionText from './ActionText';
import CatFormHeading from './Heading';
import CatFormButton from './Button';
import Form from './Form';
import Wrapper from './Wrapper';

const UnconnectedFormWithCats = (props) => {
  const { email, number, required } = validation;
  let result;

  if (props.randomCat) {
    result = (
      <div>
        <CatFormHeading>
          Here is your cat.
          <ActionText onClick={props.clearRandomCat}>
            Try again?
          </ActionText>
        </CatFormHeading>
        <img
          alt=""
          src={props.randomCat}
        />
      </div>);
  }

  return (
    <Wrapper>
      {!result &&
      <Form onSubmit={props.handleSubmit && props.handleSubmit(props.giveRandomCat)}>
        <CatFormHeading>Form.</CatFormHeading>
        <Field
          label="Name:"
          name="name"
          component={FormField}
          type="text"
          validate={required}
        />
        <Field
          label="Email:"
          name="email"
          component={FormField}
          type="text"
          validate={[email, required]}
        />
        <Field
          label="Number:"
          name="number"
          component={FormField}
          type="text"
          validate={[number, required]}
        />
        <CatFormButton type="submit">
            Submit the form.
        </CatFormButton>
      </Form> }
      {result}
    </Wrapper>
  );
};

UnconnectedFormWithCats.propTypes = {
  clearRandomCat: PropTypes.func.isRequired,
  giveRandomCat: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  randomCat: PropTypes.string,
};

UnconnectedFormWithCats.defaultProps = {
  randomCat: '',
};

export default connect(
  ({ cats = {} }) => ({
    randomCat: cats.randomCat,
  }),
  {
    clearRandomCat,
    giveRandomCat,
  },
)(reduxForm({
  form: 'cats',
})(UnconnectedFormWithCats));
