export default {
  tag: 'fieldset',
  type: 'Radio buttons',
  'cf-questions':
    'J\'aurai quelque question pour toi {first_name}.&&' +
    'Premièrement, quel est votre status?',
  children: [
    {
      tag: 'input',
      type: 'radio',
      name: 'clientType',
      value: 'tenant',
      'cf-label': 'Je suis un locataire',
    },
    {
      tag: 'input',
      type: 'radio',
      name: 'clientType',
      value: 'landlord',
      'cf-label': 'Je suis un propriétaire',
    },
  ],
};
