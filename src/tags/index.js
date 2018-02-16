import clientType from './clientType';
import nbPropriety from './nbPropriety';
import SatisfactionTagFactory from '../utils/SatisfactionTagFactory';
import SelectTagFactory from '../utils/SelectTagFactory';
import RadioTagFactory from '../utils/RadioTagFactory';
import informationRequiered from './informationRequiered';
import greating from './greating';
import salutation from './salutation';

export default [
  salutation,
  clientType,
  nbPropriety,
  SatisfactionTagFactory({
    name: 'getUserInformation',
    question: 'Trouvez-vous facile de rassembler les informations de vos propriétés et/ou locataires?',
  }),
  SatisfactionTagFactory({
    name: 'appointement',
    question: 'En général, à quel point la prise de rendez-vous pour avoir accès au logement est-elle irritante?&&Ex. : Visite pour location, réparation, etc.',
  }),
  informationRequiered,
  RadioTagFactory({
    name: 'informationRequieredFrequance',
    question: 'À quelle fréquence demandez-vous ces informations?',
    options: ['Jamais', 'Régulièrement', 'Toujours'],
  }),
  SelectTagFactory({
    name: 'communicationMethod',
    question: 'Quelles sont les modes de communication utilisez-vous avec vos locataires?',
    options: ['Message texte', 'Téléphone', 'Courriel', 'Face à face', 'Poste'],
  }),
  SatisfactionTagFactory({
    name: 'communicationDifficulty',
    question: 'Trouvez-vous difficile d’entrer en communication avec vos locataires?',
  }),
  SatisfactionTagFactory({
    name: 'followupDifficulty',
    question: 'Avez-vous de la facilité à faire un suivi des demandes de vos locataires?',
  }),
  SelectTagFactory({
    name: 'requestedFunctionality',
    question: 'Quelles fonctionnalités aimeriez-vous retrouver dans une application pour vous aider?',
    options: ['Messagerie', 'Suivi des demandes', 'Sélection des futurs locataires', 'Paiement en ligne', 'Banques d’images pour les logements', 'Banques d’images pour les bris', 'Signature électronique du bail', 'Fiche sur le logement réutilisable', 'Stockage des documents légaux', 'Rappel des dates importantes (renouvellement du bail, paiement du loyer)'],
  }),
  greating,
];
