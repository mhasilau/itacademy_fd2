import moment from 'moment';
import { initAPI, setLessons } from './api/api-handlers';

initAPI();

// for task 1
const user = {
    firstname: 'Mike',
    lastname: 'Wasowski',
    age: 30,
    job: {
        company: 'Monsters, Inc',
        position: 'Comic',
        skils: ['detective', 'nanny', 'horror']
    }
}

window.onload = () => {
    if (window.location.pathname === '/') {
        const mainDiv = document.getElementById('main');
        const task1 = document.createElement('button');
        const task2 = document.createElement('button');
        task1.innerHTML = 'hello';
        task1.append(mainDiv);
    }

    if (window.location.pathname === 'task1.html') {
        const userName = ({ firstname, lastname }) => {
            return `${firstname} ${lastname}`
        }
        
        const userWork = ({ company, position }) => {
            return `He works in ${company} on position ${position}`
        }
        
        const fullName = document.getElementById('name');
        fullName.innerHTML = userName(user)
        
        const work = document.getElementById('work');
        work.innerHTML = userWork(user.job);
    }

    if (window.location.pathname === 'task2.html') {
        const lesson = {
            number: '5',
            date: moment().format('LLL'),
            theme: 'async, firebase'
        }

        setLessons(lesson);
    }
}
