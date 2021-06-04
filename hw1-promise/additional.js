const users = () => new Promise( (resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( result => resolve(result))
        .catch( err => reject(err) );
});
users()
    .then( result => console.log('success:', result))
    .catch( error => console.log('error:', error))
//     .finally( () => console.log('finally'));




const getUser = () => {
    const mainDiv = document.createElement('div');
    // document.append(mainDiv);

    users()
        .then( result => result.forEach ( ( { email, name, phone} ) => {
            const usersName = document.getElementById('names');
            // usersName.classList.add('btn btn-secondary dropdown-toggle');
            usersName.innerHTML = name;
            // div.innerHTML = email;
            // mainDiv.append(usersName);
        }))





        // .then( ( { address, email, name, phone} ) => {
        //     result.forEach( el => {
        //     });
        // } );
}

getUser();



//     const URL = 'https://jsonplaceholder.typicode.com/users';
// let getUser = () => new Promise ( resolve => {
//     fetch(URL)
//         .then(response => response.json())
//         .then(json => resolve(json))
// })

// let createUser = () => {
//     let main = document.querySelector('.main');
//     getUser().then( result => {
//         result.forEach(user => {
//             const div = document.createElement('div');
//             div.className = "btn-group dropend block";
//             main.append(div);

//             let button = document.createElement('button');
//             button.className = "btn btn-info dropdown-toggle";
//             button.setAttribute("data-bs-toggle", "dropdown");
//             button.innerHTML = user.name;
//             div.append(button);

//             const ul = document.createElement('ul');
//             ul.className = "dropdown-menu";
//             div.append(ul);

//             const li = document.createElement('li');
//             li.innerHTML = user.email;
//             ul.append(li);

//             const li2 = document.createElement('li');
//             li2.innerHTML = user.phone;
//             ul.append(li2);
//         })
//     })
// }
// createUser()