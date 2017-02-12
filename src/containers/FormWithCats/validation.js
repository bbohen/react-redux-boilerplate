/**
 * validation logic for FormWithCats
 * if these need to be shared a central validation file should be created
 */

const validation = {
  email: value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Thats not an email!' : undefined),
  number: value => (value && isNaN(Number(value))) ? 'Thats not a number!' : undefined,
  required: value => (value ? undefined : 'Required!'),
};

export default validation;
