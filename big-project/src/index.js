import { initApi, createUser, getUsers, createTodos, getTodos, updateUser, removeUser, createPost} from './api/api-handlers';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import './styles/styles.scss';

initApi();

// const user = {
//     username: 'jane',
//     age: 29,
//     createionDate: moment().format('LLL')
// }


// const todo ={
//     title: '3rd title',
//     createionDate: moment().format('LLL')
// }


// // createUser(user);

// getUsers();

// // createTodos(todo);
// getTodos();
// // removeUser();
// updateUser();




const post_form = document.getElementById('post_form');
const title_input = document.getElementById('title_input');
const post_content = document.getElementById('post_content');
const postContainer = document.querySelector('.main-content__posts');
let counter = 0;

const post = {
    userId: uuidv4(),
    name: 'mike',
    email: 'pro100mishok@mail.ru',
    date: moment().format('LLL'),
    title: null,
    content: null
}



post_form.addEventListener('submit', event => {
    event.preventDefault();
    post_content.value = null;
    title_input.value = null;
    post.title = title_input.value;
    post.content = post_content.value;
    createPost(post);
});
