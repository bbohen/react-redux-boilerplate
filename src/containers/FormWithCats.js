import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

class FormWithCats extends Component {
  render() {
    const { handleSubmit } = this.props;
    const FormWrapper = styled.div`
      display: flex;
      justify-content: center;
    `;
    const InputWrapper = styled.div`
      margin-bottom: 1em;
    `;
    const StyledInput = styled(Field)`
      background-color: teal;
      color: ivory;
      border: none;
      font-size: 2em;
      width: 100%;
      padding: 1em;
    `;

    // TODO: Query reddit API with the results from this cat-form?
    // Change colors or something while typing?

    return (
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledInput name="firstName" component="input" type="text" placeholder="Breed" />
          </InputWrapper>
          <InputWrapper>
            <StyledInput name="lastName" component="input" type="text" placeholder="Breed" />
          </InputWrapper>
          <InputWrapper>
            <StyledInput name="email" component="input" type="email" placeholder="Breed" />
          </InputWrapper>
          <button type="submit">Submit</button>
        </form>
      </FormWrapper>
    );
  }
}

export default reduxForm({
  form: 'contact',
})(FormWithCats);
