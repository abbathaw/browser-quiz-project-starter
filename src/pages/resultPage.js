'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { initWelcomePage } from './welcomePage.js';
import { createResultElement } from '../views/resultView.js';
import { writeToLocal } from '../localStorageService.js'

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement();
  userInterface.appendChild(resultElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', reStartQuiz);
};

const reStartQuiz = () => {
  writeToLocal(0, 0);
  initWelcomePage();
};
