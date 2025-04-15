import { MAIL_ID } from '../../config/serverConfig.js';

export const workspaceJoinMail = function (workspace) {
  return {
    from: MAIL_ID,
    subject: 'You have been invited to join a workspace',
    text: `Congratulation! You have been added to the workspace ${workspace.name}.`,
  };
};
