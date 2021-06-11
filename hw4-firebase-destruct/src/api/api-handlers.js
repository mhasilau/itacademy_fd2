import firebase from "firebase";
import { FIREBASE_CONFIG, databaseURL } from './api-config';

export const initAPI = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const setLessons = ({number, date, theme}) => {
    fetch(
        `${databaseURL}/lessons.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number,
                date,
                theme
            })
        }
    )
    .then( response => response.json()
    .then(result => console.log(result)))
}

export const getLessons = () => {
    fetch(
        `${databaseURL}/lessons.json`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then( response => response.json()
    .then( result => {
        const niceResult = Object.keys(result).map(
            key => ({
                ...result[key],
                id: key
            })
        );
        console.log(niceResult);
    }));
}