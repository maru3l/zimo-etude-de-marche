import cf from 'conversational-form';
import tags from './tags';

import './assets/styles/style.css';
import './assets/styles/app.css';

let cfInstance = {};

// const flowCallback = (dto, success, error) => {
//   success();
// };

// const onFormSubmitted = () => {
//   const formData = cfInstance.getFormData();
//   const formDataSerialized = cfInstance.getFormData(true);
//   console.log('Formdata:', formData);
//   console.log('Formdata, obj:', formDataSerialized);
//   cfInstance.addRobotChatResponse('Check the dev console for FormatData output.');
// };

cfInstance = cf.startTheConversation({
  options: {
    preventAutoAppend: true,
    // preventAutoFocus: true,
    // hideUserInputOnNoneTextInput: true,
    // flowStepCallback: flowCallback,
    submitCallback: () => cfInstance.addRobotChatResponse('You are done. Thank you.'),
  },
  tags,
});


document.querySelector('#app').appendChild(cfInstance.el);

cfInstance.focus();
