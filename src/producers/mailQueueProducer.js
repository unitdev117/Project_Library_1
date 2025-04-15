import '../processors/mailProcessor.js';

import mailQueue from '../queues/mailQueue.js';

export const addEmailToMailQueue = async (emailData) => {
  console.log('Initiating Email sending process');
  try {
    await mailQueue.add(emailData);
    console.log('Email added to mail queue');
  } catch (error) {
    console.log('Add Mail queue producer error ', error);
  }
};
