import { nanoid } from 'nanoid';

import { ERROR_MESSAGE_SHOW_TIME } from '../const';

const generateAuthToken = () => `Basic ${nanoid()}`;

const createErrorMessage = (errorMessage) => {
  const errorAlert = document.createElement('div');
  errorAlert.style.zIndex = '100';
  errorAlert.style.position = 'absolute';
  errorAlert.style.left = '0';
  errorAlert.style.top = '0';
  errorAlert.style.right = '0';
  errorAlert.style.padding = '10px';
  errorAlert.style.fontSize = '20px';
  errorAlert.style.textAlign = 'center';
  errorAlert.style.backgroundColor = 'red';
  errorAlert.textContent = errorMessage;

  document.body.append(errorAlert);

  setTimeout(() => errorAlert.remove(), ERROR_MESSAGE_SHOW_TIME);
};

export { generateAuthToken, createErrorMessage };
