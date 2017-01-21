import React, { PropTypes } from 'react';
import Feedback from './Feedback';
import Input from './Input';
import Label from './Label';
import Wrapper from './Wrapper';

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
    <Wrapper>
      <Label
        error={showError}
        warning={showWarning}
      >
        {label}
      </Label>
      <Input
        error={showError}
        warning={showWarning}
        placeholder={placeholder}
        type={type}
        {...input}
      />
      {((showError &&
        <Feedback
          error={showError}
          warning={showWarning}
        >
          {error}
        </Feedback>) ||
      (showWarning &&
        <Feedback
          error={showError}
          warning={showWarning}
        >
          {warning}
        </Feedback>))}
    </Wrapper>
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
