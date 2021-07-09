import { PASSWORD_LENGTH } from './constants/regexp';

export const passwordLengthValidator = password => password.match(PASSWORD_LENGTH);
