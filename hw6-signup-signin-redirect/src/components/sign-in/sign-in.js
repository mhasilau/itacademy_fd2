import { signIn } from '../../api/api-handler';
import { setToken } from '../../ls-config/ls-handler';
import { routes } from '../../shared/constants/routes';

export const signInHandler = () => {
    const formIn = document.querySelector('.formIn');

    formIn.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password).then( response => {
            if (response) {
                const { idToken: token} = response.data;
                setToken(token);
                window.location.href = routes.home;
            }
        });

    });
}
