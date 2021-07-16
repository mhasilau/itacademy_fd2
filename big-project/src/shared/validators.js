import { REGEXP } from './constants/regexp';
import { PASSWORD_STRENGTH } from './constants/common';

export const passwordLengthValidator = password => password.match(REGEXP.PASSWORD_LENGTH);

export const emailValidator = email => email.match(REGEXP.EMAIL)

const lowerCaseCheck = password => REGEXP.LOWER_CASE.test(password);

const upperCaseCheck = password => REGEXP.UPPER_CASE.test(password);

const numbersCheck = password => REGEXP.NUMBERS.test(password);

const eightCharactersCheck = password =>  REGEXP.EIGHT_CHARACTERS.test(password);

export const passwordStrengthController = password => {
    let passwordStrength;
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

    console.log(passwordStrengthNum);

    const filler = document.querySelector('.sign_up__form__password-strength-status-filler');
    switch (passwordStrengthNum) {
        case 1:
            filler.classList.add('weak');
            filler.classList.remove('moderator');
            break;
        case 2:
            filler.classList.add('moderator');
            filler.classList.remove('strong');
            break;
        case 3:
            filler.classList.add('strong');
            filler.classList.remove('very-strong');
            break;
        case 4:
            filler.classList.add('very-strong');
            break;
        default:
            filler.classList.remove('weak');
            break;
    }
}
