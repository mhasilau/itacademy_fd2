import firebase from 'firebase/app';
import { FIREBASE_CONFIG, databaseURL } from './api-config';

export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

const headers = {
                'Content-Type': 'application/json'
}

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




export const createPost = post => {
    const { userId, name, email, date, title, content } = post;
    fetch(`${databaseURL}/posts.json`,
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
    })
    .then( response => response.json()
    .then( result => result))
}

export const getPosts = () => {
    fetch(`${databaseURL}/posts.json`,
    {
        method: 'GET',
        headers
    })
}