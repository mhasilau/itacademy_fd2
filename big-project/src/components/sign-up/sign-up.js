import { signUp } from '../../api/api-handlers';
import { setUserEmail } from '../../shared/ls-service';
import { emailValidator, passwordStrengthController, userNameValidator, bdayValidator } from '../../shared/validators';
import { showPasswordsCompareError, hidePasswordsCompareError, hideEmailErrorMessage, showUsernameError, hideUsernameError, showBdayError, hideBdayError } from '../../shared/error-handlers';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.sign_up__form');

    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const signUpBtn = document.getElementById('signUpBtn');
    const emailInput = document.getElementById('email');
    const userNameInput = document.getElementById('name');
    const userSurnameInput = document.getElementById('surname');
    const birthInput = document.getElementById('birth');

    signUpBtn.setAttribute('disabled', true);

    const formFields = {
        username: {
            isValid: false
        },
        birth: {
            isValid: true
        },
        email: {
            isValid: false
        },
        password1: {
            isValid: false
        },
        password2: {
            isValid: false
        }
    }

    userNameInput.oninput = () => {
        if (userNameValidator(userNameInput.value)) {
            formFields.username.isValid = true;
            hideUsernameError();
            userNameInput.classList.remove('invalid');
        } else {
            formFields.username.isValid = false;
            userNameInput.classList.add('invalid');
        }
        checkFormValid();
    }

    emailInput.oninput = () => {
        if (emailValidator(emailInput.value)) {
            formFields.email.isValid = true;
            hideEmailErrorMessage();
            passwordInput.classList.remove('invalid');
        } else {
            formFields.email.isValid = false;
            passwordInput.classList.add('invalid');
        }
        checkFormValid();
    }

    password1.oninput = () => {
        formFields.password1 = passwordStrengthController(password1.value);
        checkFormValid();
    }

    password2.oninput = () => {
        formFields.password2 = passwordStrengthController && (password1.value === password2.value);
        checkFormValid();
    }

    password2.onblur = () => {
        password1.value !== password2.value ? showPasswordsCompareError() : hidePasswordsCompareError();
    }

    userNameInput.onblur = () => {
       !userNameInput.value !== userNameInput.value ? showUsernameError() : hideUsernameError();
    }


    birthInput.oninput = () => {
        // console.log(birthInput.value);
        // formFields.birth = bdayValidator(birthInput.value);
        if (bdayValidator(birthInput.value)) {
            formFields.birth.isValid = true;
            hideBdayError()
            birthInput.classList.remove('invalid');
        } else {
            formFields.birth.isValid = false;
            birthInput.classList.add('invalid');
        }
        checkFormValid();
    }

    const checkFormValid = () => {
        const isFormValid = Object.values(formFields).every(value => value.isValid);
        isFormValid ? signUpBtn.removeAttribute('disabled') : signUpBtn.setAttribute('disabled', true);
    }

    signUpForm.addEventListener('submit', event => {
        event.preventDefault();
        signUp(email, password);

        const user = {
            firstname: userNameInput.value,
            lastname: userSurnameInput.value,
            email: emailInput.value,
            birth: birthInput.value,
            password: password1.value

        }

    })

}


