import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import Button from '../components/Button';
import Heading from '../components/Heading';
import InputField from '../components/InputField';
import { clearRandomCat, giveRandomCat } from '../redux/modules/cats';

const FormWrapper = styled.div`
  display: flex;
`;

const CatForm = styled.form`
  width: 50%;
`;

const CatFormHeading = styled(Heading)`
  margin-bottom: 1em;
`;

const CatFormButton = styled(Button)`
  width: 60%;
  margin: 2em 20% 0;
`;

const SalmonText = styled.div`
  color: LightSalmon;
  cursor: pointer;
`;

const FormWithCats = (props) => {
  const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
  const required = value => (value ? undefined : 'Required');
  let result;

  if (props.randomCat) {
    result = (
      <div>
        <CatFormHeading>
          Here is your cat.
          <SalmonText onClick={props.clearRandomCat}>
            Try again?
          </SalmonText>
        </CatFormHeading>
        <img
          role="presentation"
          src={props.randomCat}
        />
      </div>);
  }

  return (
    <FormWrapper>
      {!result &&
      <CatForm onSubmit={props.handleSubmit(props.giveRandomCat)}>
        <CatFormHeading>Fill out cat form, receive cat.</CatFormHeading>
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
        <CatFormButton type="submit">
            Give me cat.
        </CatFormButton>
      </CatForm> }
      {result}
    </FormWrapper>
  );
};

FormWithCats.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearRandomCat: PropTypes.func.isRequired,
  giveRandomCat: PropTypes.func.isRequired,
  randomCat: PropTypes.string,
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
