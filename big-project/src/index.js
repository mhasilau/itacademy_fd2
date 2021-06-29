import {renderPosts, postFormrender} from './dom-handlers/posts-renderer';
import { routes, paths } from './shared/constants/routes';
import { signInhandler } from './components/sign-in/sign-in';
import { getToken } from './shared/ls-service';
import { logoutBtnHandler } from './components/profile/profile';
import { signUpHandler } from './components/sign-up/sign-up';

import './styles/styles.scss';

window.onload = () => {
    const pathname = Object.values(paths).find( path => path === window.location.pathname);

    switch (pathname) {
        case paths.home:

            const token = getToken();
            if (!token) {
                window.location.href = routes.sign_in;
            } else {
                renderPosts();
                postFormrender();
                logoutBtnHandler();
            }
            
            break;
        case paths.sign_in:
            signInhandler();
            break;
        case paths.sign_up:
            signUpHandler();
            break;
        default:
            break;
    }
}