import firebase from 'firebase/app';
import { FIREBASE_CONFIG, databaseURL } from './api-config';
import { v4 as uuidv4 } from 'uuid';

export const initApi = () => {
    firebase.initializeApp(FIREBASE_CONFIG);
}

export const createUser = ({ 
    firstname,
    lastname,
    email,
    phone,
    userTime 
}) => {
    fetch(
        `${databaseURL}/hw5.json`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: uuidv4(),
                firstname,
                lastname,
                email,
                phone,
                userTime
            })
        }
    )
        .then( response => response.json())
        .then( result => console.log(result));
}

export const getUsers = () => {
    const divContent = document.getElementById('content');
    divContent.innerHTML = null;
    fetch(`${databaseURL}/hw5.json`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json())
    .then( result => {
        const transformedUsersArray = Object.keys(result).map(
            key => ({
                ...result[key],
                id: key
            })
        );
        // return transformedUsersArray;
        // console.log(transformedUsersArray.length);
                
        const usrs = transformedUsersArray.map( ({ firstname, lastname, email, phone, userTime }) => {
            
            const divContent = document.getElementById('content');
            const divUser = document.createElement('div');
            divUser.className = 'form';
            let pName = document.createElement('p');
            let pSName = document.createElement('p');
            let pEmail = document.createElement('p');
            let pPhone = document.createElement('p');
            let pTime = document.createElement('p');
            const delBtn = document.createElement('button');
            delBtn.innerHTML = 'Delete';
            delBtn.className = 'btn btn-info';
            pName.innerHTML = `Name: ${firstname}`;
            pSName.innerHTML = `Second name: ${lastname}`;
            pEmail.innerHTML = `E-mail: ${email}`;
            pPhone.innerHTML = `Phone number: ${phone}`;
            pTime.innerHTML = `Date of commit: ${userTime}`;
            divUser.append(pName);
            divUser.append(pSName);
            divUser.append(pEmail);
            divUser.append(pPhone);
            divUser.append(pTime);
            divUser.append(delBtn);
            divContent.append(divUser);

            delBtn.onclick = () => {
                usrs.forEach( () => {
                    divUser.remove();
                })
            }
        });
    });
}

