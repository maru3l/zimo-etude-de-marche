export default {
  tag: 'select',
  multiple: 'multiple',
  'cf-questions': 'Lorsque vous louez votre logement, quelle(s) information(s) demandez-vous à votre future locataire',
  children: [
    {
      tag: 'option',
      name: 'informationRequiered',
      value: 'Enquête de crédit',
      'cf-label': 'Enquête de crédit',
    },
    {
      tag: 'option',
      name: 'informationRequiered',
      value: 'Contrat de travail',
      'cf-label': 'Contrat de travail',
    },
    {
      tag: 'option',
      name: 'informationRequiered',
      value: 'Référence d’ancien propriétaire',
      'cf-label': 'Référence d’ancien propriétaire',
    },
    {
      tag: 'option',
      name: 'informationRequiered',
      value: 'Dossier criminel',
      'cf-label': 'Dossier criminel',
    },
    {
      tag: 'option',
      name: 'informationRequiered',
      value: 'Médias sociaux',
      'cf-label': 'Médias sociaux',
    },
  ],
};
