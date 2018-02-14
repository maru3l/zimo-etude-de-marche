import cf from 'conversational-form';

import './assets/styles/style.css';

let cfInstance = {};

const flowCallback = (dto, success, error) => {
  // console.log('dto....', dto, success, error);

  success();
};

const onFormSubmitted = () => {
  const formData = cfInstance.getFormData();
  const formDataSerialized = cfInstance.getFormData(true);
  // console.log('Formdata:', formData);
  // console.log('Formdata, obj:', formDataSerialized);
  cfInstance.addRobotChatResponse('Check the dev console for FormatData output.');
};

const tags = [
  {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': 'Salut, je m\'appelle Alfred. Je suis l\'un des chatbot de Zimo.&&J\'aurai quelque question à vous poser.&&Premièrement, quel est votre status?',
    children: [
      {
        tag: 'input',
        type: 'radio',
        name: 'clientType',
        value: 'locataire',
        'cf-label': 'Je suis un locataire',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'clientType',
        value: 'proprio',
        'cf-label': 'Je suis un propriétaire',
      },
    ],
  },
  {
    tag: 'input',
    type: 'number',
    min: 1,
    'cf-questions': 'Combien de propriétés possédez-vous?',
    'cf-input-placeholder': 'Numbre de propriétés',
    name: 'nbPropriety',
  },
  {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': 'Trouvez-vous facile de rassembler les informations de vos propriétés et/ou locataires?',
    children: [
      {
        tag: 'input',
        type: 'radio',
        name: 'getUserInformation',
        value: '1',
        'cf-label': '&#128553;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'getUserInformation',
        value: '2',
        'cf-label': '&#128542;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'getUserInformation',
        value: '3',
        'cf-label': '&#128528;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'getUserInformation',
        value: '4',
        'cf-label': '&#128578;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'getUserInformation',
        value: '5',
        'cf-label': '&#128515;',
      },
    ],
  },
  {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': 'En général, à quel point la prise de rendez-vous pour avoir accès au logement est-elle irritante?&&Ex. : Visite pour location, réparation, etc.',
    children: [
      {
        tag: 'input',
        type: 'radio',
        name: 'appointement',
        value: '1',
        'cf-label': '&#128553;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'appointement',
        value: '2',
        'cf-label': '&#128542;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'appointement',
        value: '3',
        'cf-label': '&#128528;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'appointement',
        value: '4',
        'cf-label': '&#128578;',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'appointement',
        value: '5',
        'cf-label': '&#128515;',
      },
    ],
  },
  {
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
  },
  {
    tag: 'fieldset',
    type: 'Radio buttons',
    'cf-questions': 'À quelle fréquence demandez-vous ces informations?',
    children: [
      {
        tag: 'input',
        type: 'radio',
        name: 'informationRequieredFrequance',
        value: 'Jamais',
        'cf-label': 'Jamais',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'informationRequieredFrequance',
        value: 'Régulièrement',
        'cf-label': 'Régulièrement',
      },
      {
        tag: 'input',
        type: 'radio',
        name: 'informationRequieredFrequance',
        value: 'Toujours',
        'cf-label': 'Toujours',
      },
    ],
  },
];

cfInstance = cf.startTheConversation({
  options: {
    preventAutoAppend: true,
    preventAutoFocus: true,
    hideUserInputOnNoneTextInput: true,
    flowStepCallback: flowCallback,
    submitCallback: () => cfInstance.addRobotChatResponse('You are done. Thank you.'),
  },
  tags,
});

document.querySelector('#app').appendChild(cfInstance.el);
