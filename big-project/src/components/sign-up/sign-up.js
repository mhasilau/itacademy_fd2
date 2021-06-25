import { signUp } from '../../api/api-handlers';
import { setUserEmail } from '../../shared/ls-service';

export const signUpHandler = () => {
    const signUpForm = document.querySelector('.sign_up__form');

    signUpForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const birth = document.getElementById('birth').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signUp(email, password)
            .then(response => {
                if (response) {
                    const { email } = response.user;
                    setUserEmail(email);
                }
            });
    })

}


