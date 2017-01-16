import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Button from '../components/Button';
import Heading from '../components/Heading';
import InputField from '../components/InputField';
import { giveRandomCat } from '../redux/modules/cats';

const FormWithCats = (props) => {
  const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
  const required = value => (value ? undefined : 'Required');

  return (
    <form onSubmit={props.handleSubmit(props.giveRandomCat)}>
      <Heading>Fill out cat form, receive cat.</Heading>
      <Field
        label="Cat Name:"
        name="catName"
        component={InputField}
        type="text"
        validate={required}
      />
      <Field
        label="Cat Email:"
        name="catEmail"
        component={InputField}
        type="text"
        validate={[email, required]}
      />
      <Button type="submit">
          Give me cat.
      </Button>
    </form>
  );
};

FormWithCats.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  giveRandomCat: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    cats: state.cats,
  }),
  {
    giveRandomCat,
  },
)(reduxForm(
  {
    form: 'cats',
  })(FormWithCats),
);
