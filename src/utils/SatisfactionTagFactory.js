export default function ({ name, question }) {
  return {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': question,
    children: [
      {
        tag: 'input',
        type: 'radio',
        name,
        value: '1',
        'cf-label': '<span class="emoji-icon">&#128553;</span>',
      },
      {
        tag: 'input',
        type: 'radio',
        name,
        value: '2',
        'cf-label': '<span class="emoji-icon">&#128542;</span>',
      },
      {
        tag: 'input',
        type: 'radio',
        name,
        value: '3',
        'cf-label': '<span class="emoji-icon">&#128528;</span>',
      },
      {
        tag: 'input',
        type: 'radio',
        name,
        value: '4',
        'cf-label': '<span class="emoji-icon">&#128578;</span>',
      },
      {
        tag: 'input',
        type: 'radio',
        name,
        value: '5',
        'cf-label': '<span class="emoji-icon">&#128515;</span>',
      },
    ],
  };
}
