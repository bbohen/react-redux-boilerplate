import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
  align-items: center;
`;
const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid teal;
  color: teal;
  outline: none;
  padding: 1em;
`;

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) =>
  <InputWrapper>
    <div>{label}</div>
    <FormInput
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {touched &&
    ((error && <span>{error}</span>) ||
    (warning && <span>{warning}</span>))}
  </InputWrapper>;

export default InputField;
