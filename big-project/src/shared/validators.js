import moment from 'moment';

import { REGEXP } from './constants/regexp';
import { PASSWORD_STRENGTH, VALIDATION_MESSAGES } from './constants/common';

export const passwordLengthValidator = password => password.match(REGEXP.PASSWORD_LENGTH);

export const emailValidator = email => email.match(REGEXP.EMAIL);

export const userNameValidator = username => username.match(REGEXP.NAME);

const valid_info_lowerCase = document.querySelector('.sign_up__form__password-strength-status-filler-info-lowercase');
const valid_info_upperCase = document.querySelector('.sign_up__form__password-strength-status-filler-info-uppercase');
const valid_info_numbers = document.querySelector('.sign_up__form__password-strength-status-filler-info-numbers');
const valid_info_elements = document.querySelector('.sign_up__form__password-strength-status-filler-info-elements');

export const bdayValidator = birth => {
    const currentDate = moment();
    const comparngDate = moment(birth)
    const isAdult = currentDate.diff(comparngDate, 'years', true) >= 18;
    return isAdult;
}

const lowerCaseCheck = password => {
    const result = REGEXP.LOWER_CASE.test(password);
    result ? valid_info_lowerCase.style.color = 'green' : valid_info_lowerCase.style.color = 'gray'
    valid_info_lowerCase.innerText = VALIDATION_MESSAGES.lowercase;
}

const upperCaseCheck = password => {

    const result = REGEXP.UPPER_CASE.test(password);
    result ? valid_info_upperCase.style.color = 'green' : valid_info_upperCase.style.color = 'gray';
    valid_info_upperCase.innerText = VALIDATION_MESSAGES.uppercase;
}

const numbersCheck = password => {

    const result = REGEXP.NUMBERS.test(password);
    result ? valid_info_numbers.style.color = 'green' : valid_info_numbers.style.color = 'gray'
    valid_info_numbers.innerText = VALIDATION_MESSAGES.numbers;
}

const eightCharactersCheck = password =>  {

    const result = REGEXP.EIGHT_CHARACTERS.test(password);
    result ? valid_info_elements.style.color = 'green' : valid_info_elements.style.color = 'gray';
    valid_info_elements.innerText = VALIDATION_MESSAGES.elements;
}




export const passwordStrengthController = password => {
    const validationStatus = document.querySelector('.sign_up__form__password-strength-status-filler-current');
    const passwordStrengthBlock = document.querySelector('.sign_up__form__password-strength')

    let passwordStrength;

    passwordStrengthBlock.style.display = 'block';

    const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numbersCheck(password) +
    eightCharactersCheck(password);

    Object.keys(PASSWORD_STRENGTH).forEach(item  => {
        if (PASSWORD_STRENGTH[item] === passwordStrengthNum) {
            passwordStrength = item;
        }
    });

    // console.log(passwordStrengthNum);

    const filler = document.querySelector('.sign_up__form__password-strength-status-filler');
    switch (passwordStrengthNum) {
        case 1:
            filler.classList.add('weak');
            filler.classList.remove('moderator');
            validationStatus.className = ('sign_up__form__password-strength-status-filler-current-weak');
            break;
        case 2:
            filler.classList.add('moderator');
            filler.classList.remove('strong');
            validationStatus.className = ('sign_up__form__password-strength-status-filler-current-moderator');
            break;
        case 3:
            filler.classList.add('strong');
            filler.classList.remove('very-strong');
            validationStatus.className = ('sign_up__form__password-strength-status-filler-current-strong');
            break;
        case 4:
            filler.classList.add('very-strong');
            validationStatus.className = ('sign_up__form__password-strength-status-filler-current-very-strong');
            break;
        default:
            filler.classList.remove('very-strong');
            break;
    }

    return passwordStrengthNum === 4;



}
