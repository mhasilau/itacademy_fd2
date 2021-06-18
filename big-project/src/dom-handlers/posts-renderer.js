import moment from 'moment';

import {getPosts} from '../api/api-handlers';

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
