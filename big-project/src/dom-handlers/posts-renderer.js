import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import {getPosts, createPost} from '../api/api-handlers';

export const renderPosts = () => {
    getPosts()
        .then( posts => {
            const postsContainer = document.querySelector('.main-content__posts');
            postsContainer.innerHTML = null;


            posts.forEach( item => {
                const post = document.createElement('div');
                const title = document.createElement('h5');
                const content = document.createElement('p');
                const infoName = document.createElement('span');
                const infoDate = document.createElement('span');

                post.className = 'main-content__posts__post';
                title.className = 'main-content__posts__post__title';
                content.className = 'main-content__posts__post__content';
                infoName.className = 'main-content__posts__post__info';
                infoDate.className = 'main-content__posts__post__info';

                title.innerHTML = item.title;
                content.innerHTML = item.content;
                infoName.innerHTML = `${item.name}, `;
                infoDate.innerHTML = moment(item.date).format('MMM Do YY');

                postsContainer.append(post);
                post.append(title, content, infoName, infoDate);
                
                


            } )
        });
}

export const postFormrender = () => {
    const post_form = document.getElementById('post_form');
    const title_input = document.getElementById('title_input');
    const post_content = document.getElementById('post_content');
    const postContainer = document.querySelector('.main-content__posts');
    
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
        post.title = title_input.value;
        post.content = post_content.value;
        createPost(post)
            .then( () => renderPosts());
        post_content.value = null;
        title_input.value = null;
    });
    
}
