export default function ({ name, question, options }) {
  const children = options.map(option => ({
    tag: 'option',
    name,
    value: option,
    'cf-label': option,
  }));

  return {
    tag: 'select',
    multiple: 'multiple',
    'cf-questions': question,
    children,
  };
}
