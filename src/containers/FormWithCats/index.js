import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../components/FormField';
import { clearRandomCat, giveRandomCat } from '../../redux/modules/cats';
import ActionText from './ActionText';
import CatFormHeading from './Heading';
import CatFormButton from './Button';
import Form from './Form';
import Wrapper from './Wrapper';

const FormWithCats = (props) => {
  const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Thats not an email!' : undefined);
  const number = value => (value && isNaN(Number(value))) ? 'Thats not a number!' : undefined;
  const required = value => (value ? undefined : 'Required');
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
      <Form onSubmit={props.handleSubmit(props.giveRandomCat)}>
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

FormWithCats.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearRandomCat: PropTypes.func.isRequired,
  giveRandomCat: PropTypes.func.isRequired,
  randomCat: PropTypes.string,
};

FormWithCats.defaultProps = {
  randomCat: '',
};

export default connect(
  state => ({
    randomCat: state.cats.randomCat,
  }),
  {
    clearRandomCat,
    giveRandomCat,
  },
)(reduxForm(
  {
    form: 'cats',
  })(FormWithCats),
);
