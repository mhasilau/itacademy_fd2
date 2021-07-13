import { signUp } from '../../api/api-handlers';
import { setUserEmail } from '../../shared/ls-service';
import { passwordStrengthController } from '../../shared/validators';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.sign_up__form');

    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    password1.oninput = () => {
        passwordStrengthController(password1.value);
    }


    // signUpForm.addEventListener('submit', event => {
    //     event.preventDefault();
    //     const name = document.getElementById('name').value;
    //     const surname = document.getElementById('surname').value;
    //     const birth = document.getElementById('birth').value;
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;

    //     signUp(email, password)
    //         .then(response => {
    //             if (response) {
    //                 const { email } = response.user;
    //                 setUserEmail(email);
    //             }
    //         });
    // })

}


