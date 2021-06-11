import moment from 'moment';
import { initAPI, setLessons, getLessons } from './api/api-handlers';

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
        const task1 = document.createElement('button');
        task1.innerHTML = 'To task 1'
        document.body.append(task1);
        task1.onclick = () => window.location.href = '/task1.html';

        const task2 = document.createElement('button');
        task2.innerHTML = 'To task 2'
        document.body.append(task2);
        task2.onclick = () => window.location.href = '/task2.html';
    }

    if (window.location.pathname === '/task1.html') {
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

        const goHome1 = document.createElement('button');
        goHome1.innerHTML = 'To homepage'
        document.body.append(goHome1);
        goHome1.onclick = () => window.location.href = '/';
    }

    if (window.location.pathname === '/task2.html') {


        const lesson = {
            number: '4',
            theme: 'async',
            date: moment().format('LLL')
        }

        const setButton = document.createElement('button');
        setButton.innerHTML = 'Set';
        document.body.append(setButton);
        setButton.onclick = () => {
            setLessons(lesson);
        }
        
        const getButton = document.createElement('button');
        getButton.innerHTML = 'Get';
        document.body.append(getButton);
        getButton.onclick = () => {
            getLessons(lesson)
        }

        const goHome2 = document.createElement('button');
        goHome2.innerHTML = 'To homepage'
        document.body.append(goHome2);
        goHome2.onclick = () => window.location.href = '/';
    }
}
