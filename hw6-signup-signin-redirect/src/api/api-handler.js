require('firebase/auth');

import firebase from 'firebase/app';
import axios from 'axios';

import { FIREBASE_CONFIG, databaseURL, authURL } from './api-config';


export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const signIn = (email, password) => {
    return axios.post(authURL, {
        email,
        password,
        returnSecureToken: true
    })
        .then( response => response)
        .catch( error => console.log(error));
}

initApi();
