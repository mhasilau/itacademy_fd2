import firebase from "firebase/app";

import { signIn } from '../../api/api-handlers';
import { getToken, setToken, removeToken} from '../../shared/ls-service';
import { routes, paths } from '../../shared/constants/routes';
import { passwordLengthValidator, emailValidator } from '../../shared/validators';
import { 
    showPasswordLengthErrorMessage,
    hidePasswordLengthErrorMessage,
    hideEmailErrorMessage,
    showEmailErrorMessage
} from '../../shared/error-handlers';

export const signInhandler = () => {
    const signInForm = document.querySelector('.sign_in__form');
    const signInBtn = document.getElementById('signInBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const inputError = document.querySelector('.input-error');

    signInBtn.setAttribute('disabled', true);

    const formFields = {
        email: {
            isValid: false
        },
        password: {
            isValid: false
        }
    }

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

    emailInput.onblur = () => !passwordLengthValidator(emailInput.value) ?
        showEmailErrorMessage() :
        hideEmailErrorMessage();

    const checkFormValid = () => {
        const isFormValid = Object.values(formFields).every(value => value.isValid);
        isFormValid ? signInBtn.removeAttribute('disabled') : signInBtn.setAttribute('disabled', true);
    }

}
