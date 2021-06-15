import moment from 'moment';
import firebase from 'firebase';
import './styles/styles.scss'
import { v4 as uuidv4 } from 'uuid';
import { createUser, getUsers } from './api/api-handlers';


const post = document.getElementById('post');
const userName = document.getElementById('userName');
const userSecondName = document.getElementById('userSecondName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const userTime = moment().format('LLL');
const getUsersBtn = document.getElementById('getUsers');




post.addEventListener('submit', event => {
    event.preventDefault();
    
    const user = {
        userId: uuidv4(),
        firstname: userName.value,
        lastname: userSecondName.value,
        email: email.value,
        phone: phone.value,
        userTime
    }
    
    createUser(user);

    userName.value = null;
    userSecondName.value = null;
    email.value = null;
    phone.value = null;
})

getUsersBtn.onclick = () => {
    getUsers();
}