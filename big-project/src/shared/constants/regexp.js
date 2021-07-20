export const REGEXP = {
    PASSWORD_LENGTH: /^.{8,}$/,
    EMAIL: /^[a-z0-9.\-_+]+@[a-z0-9.\-+_]+\.[a-z0-9.\-_+]{2,6}$/i,
    UPPER_CASE: /(?=.*[A-Z])/,
    LOWER_CASE: /(?=.*[a-z])/,
    NUMBERS: /(?=.*\d)/,
    EIGHT_CHARACTERS: /[a-z\d@$#!%&?^*()-+_]{8,}/i,
    NAME: /^[a-zA-Z_]{3,}$/
}
