import { initApi, createUser, getUsers, createTodos, getTodos } from './api/api-handlers';
import moment from 'moment';

initApi();

const user = {
    username: 'jane',
    age: 29,
    createionDate: moment().format('LLL')
}


const todo ={
    title: '3rd title',
    createionDate: moment().format('LLL')
}




// createUser(user);

getUsers();

createTodos(todo);
getTodos();