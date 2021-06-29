import { signUp } from '../../api/api-handler';
import { setLogin } from '../../ls-config/ls-handler';

export const signUpHandler = () => {
    const formUp = document.querySelector('.formUp');

    formUp.addEventListener('submit', event => {
        event.preventDefault();
        const fullname = document.getElementById('uName').value;
        const nickname = document.getElementById('uNickName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;

        if (password === passwordConfirm) {
            signUp(email, password)
                .then(response => {
                    if (response) {
                        const { email } = response.user;
                        setLogin(email)
                    }
                });

        } else alert('passwords do not match');
    })


}