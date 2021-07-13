import { ERROR_MESSAGE } from './constants/error_messages';

export const showPasswordLengthErrorMessage = () => {
    const errorTag = document.getElementById('passwordLengthError');
    errorTag.style.display = 'block';
    errorTag.innerText = ERROR_MESSAGE.password_length;
}

export const hidePasswordLengthErrorMessage = () => {
    const inputErrorTag = document.getElementById('passwordLengthError');
    inputErrorTag.style.display = 'none';
}

export const showEmailErrorMessage = () => {
    const errorTag = document.getElementById('emailError');
    errorTag.style.display = 'block';
    errorTag.innerText = ERROR_MESSAGE.email;
}

export const hideEmailErrorMessage = () => {
    const inputErrorTag = document.getElementById('emailError');
    inputErrorTag.style.display = 'none';
}

export const  showErrorNotification = error => {
    const notification = document.createElement('div');
    const body = document.getElementsByTagName('body')[0];
    notification.innerText = error.response.data.error.message;
    notification.className = 'error-notification';
    body.append(notification);
    setTimeout( () => notification.style.display = 'none', 5000);
}
