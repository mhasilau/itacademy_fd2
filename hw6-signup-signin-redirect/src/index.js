import { routes, paths } from './shared/constants/routes';
import { signInHandler } from './components/sign-in/sign-in';
import { signUpHandler } from './components/sign-up/sign-up';
import { getToken } from './ls-config/ls-handler';

import './styles/style.scss';

window.onload = () => {
    const pathname = Object.values(paths).find( path => path === window.location.pathname);

    switch (pathname) {
        case paths.home:
            const token = getToken();

            if (!token) {
                window.location.href = routes.sign_in;
            }
            
            break;
        case paths.sign_in:
            signInHandler();
            break;
        case paths.sign_up:
            signUpHandler();
            break;
        default:
            break;
    }
    
}