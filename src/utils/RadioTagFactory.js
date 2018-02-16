export default function ({ name, question, options }) {
  const children = options.map(option => ({
    tag: 'input',
    type: 'radio',
    name,
    value: option,
    'cf-label': option,
  }));

  return {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': question,
    children,
  };
}
