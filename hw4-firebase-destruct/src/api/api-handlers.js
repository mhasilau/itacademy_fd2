import firebase from "firebase";
import { FIREBASE_CONFIG, databaseURL } from './api-handlers';

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