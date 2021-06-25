require('firebase/auth');

import firebase from 'firebase/app';
import axios from 'axios';

import { FIREBASE_CONFIG, databaseURL, authURL } from './api-config';


export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const createPost = post => {
    const { userId, name, email, date, title, content } = post;
    return fetch(`${databaseURL}/posts.json`,
    {
        method: 'POST',
        headers,
        body: JSON.stringify({
            userId,
            name,
            email,
            date,
            title,
            content
        })
    });
}

export const getPosts = () => {
    return fetch(`${databaseURL}/posts.json`, { headers })
    .then( response => response.json())
    .then( result => {
        const transormedPostsArray = Object.keys(result).map( key => ({
            ...result[key],
            id: key
        }));
        return transormedPostsArray;
    });
}
const headers = {
    'Content-Type': 'application/json'
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

export const signUp = async (email, password) => {

    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => response);
}


initApi();


// export const createUser = ({ username, age, createionDate }) => {
//     fetch(
//         `${databaseURL}/users.json`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 age,
//                 createionDate
//             })
//         }
//     )
//         .then( response => response.json())
//         .then( result => console.log(result));
// }

// export const getUsers = () => {
//     fetch(`${databaseURL}/users.json`,
//     {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then( response => response.json())
//     .then( result => {
//         // console.log(result);
//         const transformedUsersArray = Object.keys(result).map(
//             key => ({
//                 ...result[key],
//                 id: key
//             })
//         );
//         console.log(transformedUsersArray);

//     });
// }

// export const createTodos = ({ title, createionDate }) => {
//     fetch(
//         `${databaseURL}/todos.json`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title,
//                 createionDate
//             })
//         }
//     )
//         .then( response => response.json())
//         .then( result => console.log(result));
// }

// export const getTodos = () => {
//     fetch(`${databaseURL}/todos.json`,
//     {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then( response => response.json())
//     .then( result => {
//         const transformedTodosArray = Object.keys(result).map(
//             key => ({
//                 ...result[key],
//                 id: key
//             })
//         );
//         console.log(transformedTodosArray);

//     });
// }

// export const removeUser = () => {
//     fetch(`${databaseURL}/users/-Mbgjpjcun0V9VRIWDhn.json`,
//     {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }

//     )
//     .then( response => response.json())
//     .then( result => console.log(result));
// }


// export const updateUser = () => {
//     fetch(
//         `${databaseURL}/users/-MbgjtemknGx9nCeVbD-.json`,
//         {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: 'Mike',
//                 age: '30',
//                 createionDate: '19.02'
//             })
//         }
//     )
//         .then( response => response.json())
//         .then( result => console.log(result));
// }



