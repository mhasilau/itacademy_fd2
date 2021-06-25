import firebase from "firebase/app";

import { signIn } from '../../api/api-handlers';
import { getToken, setToken, removeToken} from '../../shared/ls-service';
import { routes, paths } from '../../shared/constants/routes';

export const signInhandler = () => {
    
    const signInForm = document.querySelector('.sign_in__form');

    signInForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signIn(email, password).then( response => {
            if (response) {
                const { idToken: token } = response.data;
                setToken(token);
                window.location.href = routes.home;
            }
        });
    });
}
