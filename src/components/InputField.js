import React, { PropTypes } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  align-items: center;
`;

const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: ${({ error, warning }) => {
    let color = 'teal';

    if (error) {
      color = 'lightSalmon';
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  color: teal;
  flex-grow: 1;
  outline: none;
  padding: 1em;
`;

const FormLabel = styled.div`
color: ${({ error, warning }) => {
  if (error) {
    return 'lightSalmon';
  } else if (warning) {
    return 'yellow';
  }

  return 'teal';
}}
`;

const FormFeedback = styled.div`
  border: ${({ error, warning }) => {
    let color = 'teal';

    if (error) {
      color = 'lightSalmon';
    } else if (warning) {
      color = 'yellow';
    }

    return `1px solid ${color};`;
  }}
  width: 100%;
  padding: 1em;
  margin-top: 1em;
`;

const InputField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning },
}) => {
  const showError = touched && error;
  const showWarning = touched && warning;
  return (
    <InputWrapper>
      <FormLabel
        error={showError}
        warning={showWarning}
      >
        {label}
      </FormLabel>
      <FormInput
        error={showError}
        warning={showWarning}
        placeholder={placeholder}
        type={type}
        {...input}
      />
      {((showError &&
        <FormFeedback
          error={showError}
          warning={showWarning}
        >
          {error}
        </FormFeedback>) ||
      (showWarning &&
        <FormFeedback
          error={showError}
          warning={showWarning}
        >
          {warning}
        </FormFeedback>))}
    </InputWrapper>
  );
};

InputField.propTypes = {
  input: PropTypes.shape.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
};

export default InputField;
