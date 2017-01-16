import React from 'react';
import styled from 'styled-components';

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  const InputWrapper = styled.div`
    display: flex;
    margin-bottom: 1em;
    align-items: center;
  `;
  const CatFormInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid teal;
    color: teal;
    outline: none;
    padding: 1em;
  `;

  return (
    <InputWrapper>
      <div>{label}</div>
      <CatFormInput
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
      ((error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>))}
    </InputWrapper>
  );
};

export default InputField;
