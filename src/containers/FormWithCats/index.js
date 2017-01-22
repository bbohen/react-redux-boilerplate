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
  const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
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
          label="Cat Name:"
          name="catName"
          component={FormField}
          type="text"
          validate={required}
        />
        <Field
          label="Cat Email:"
          name="catEmail"
          component={FormField}
          type="text"
          validate={[email, required]}
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
