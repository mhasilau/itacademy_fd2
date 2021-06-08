import firebase from 'firebase/app';
import { FIREBASE_CONFIG, databaseURL } from './api-config';

export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const createUser = ({ username, age, createionDate }) => {
    fetch(
        `${databaseURL}/users.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                age,
                createionDate
            })
        }
    )
        .then( response => response.json())
        .then( result => console.log(result));
}

export const getUsers = () => {
    fetch(`${databaseURL}/users.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json())
    .then( result => {
        // console.log(result);
        const transformedUsersArray = Object.keys(result).map(
            key => ({
                ...result[key],
                id: key
            })
        );
        console.log(transformedUsersArray);

    });
}

export const createTodos = ({ title, createionDate }) => {
    fetch(
        `${databaseURL}/todos.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                createionDate
            })
        }
    )
        .then( response => response.json())
        .then( result => console.log(result));
}

export const getTodos = () => {
    fetch(`${databaseURL}/todos.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json())
    .then( result => {
        const transformedTodosArray = Object.keys(result).map(
            key => ({
                ...result[key],
                id: key
            })
        );
        console.log(transformedTodosArray);

    });
}