import firebase from "firebase/app";

import { signIn, passwordrecovery } from '../../api/api-handlers';
import { getToken, setToken, removeToken} from '../../shared/ls-service';
import { routes, paths } from '../../shared/constants/routes';
import { passwordLengthValidator, emailValidator } from '../../shared/validators';
import { 
    showPasswordLengthErrorMessage,
    hidePasswordLengthErrorMessage,
    hideEmailErrorMessage,
    showEmailErrorMessage,
    showRecoverEmailErrorMessage,
    hideRecoverEmailErrorMessage
} from '../../shared/error-handlers';

export const signInhandler = () => {
    const recoverBtn = document.getElementById('recoverBtn');
    const recoverEmailInput = document.getElementById('recoverEmailInput');
    const signInForm = document.querySelector('.sign_in__form');
    const signInBtn = document.getElementById('signInBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const inputError = document.querySelector('.input-error');

    signInBtn.setAttribute('disabled', true);
    recoverBtn.setAttribute('disabled', true);

    const formFields = {
        email: {
            isValid: false
        },
        password: {
            isValid: false
        }
    }

    recoverBtn.onclick = () => {
        passwordrecovery();
    }

    recoverEmailInput.oninput = () => {
        if (emailValidator(recoverEmailInput.value)) {
            hideRecoverEmailErrorMessage();
            emailInput.classList.remove('invalid');
            recoverBtn.removeAttribute('disabled');
        } else {
            recoverEmailInput.classList.add('invalid');
        }
    }

    recoverEmailInput.onblur = () => !emailValidator(recoverEmailInput.value) ?
    showRecoverEmailErrorMessage() :
    hideRecoverEmailErrorMessage();

    signInForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        signIn(email, password).then( response => {
            if (response) {
                const { idToken: token } = response.data;
                setToken(token);
                window.location.href = routes.home;
            }
        });
    });

    passwordInput.oninput = () => {
        if (passwordLengthValidator(passwordInput.value)) {
            formFields.password.isValid = true;
            hidePasswordLengthErrorMessage();
            passwordInput.classList.remove('invalid');
        } else {
            formFields.password.isValid = false;
            passwordInput.classList.add('invalid');
        }
        checkFormValid();
    }

    emailInput.oninput = () => {
        if (emailValidator(emailInput.value)) {
            formFields.email.isValid = true;
            hidePasswordLengthErrorMessage();
            emailInput.classList.remove('invalid');
        } else {
            formFields.email.isValid = false;
            emailInput.classList.add('invalid');
        }
        checkFormValid();
    }

    passwordInput.onblur = () => !passwordLengthValidator(passwordInput.value) ?
        showPasswordLengthErrorMessage() :
        hidePasswordLengthErrorMessage();

    emailInput.onblur = () => !emailValidator(emailInput.value) ?
        showEmailErrorMessage() :
        hideEmailErrorMessage();

    const checkFormValid = () => {
        const isFormValid = Object.values(formFields).every(value => value.isValid);
        isFormValid ? signInBtn.removeAttribute('disabled') : signInBtn.setAttribute('disabled', true);
    }

}
