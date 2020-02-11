import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import * as serviceWorker from './frontend/serviceWorker';

const { addUser, removeUser, getUser, getUsersInRoom} = require('./backend/users')

ReactDOM.render(<App />, document.getElementById('root'));

// const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: "http://localhost:4444/"
// });

// const client = new ApolloClient({
//     cache,
//     link
// });

// client
//     .query({
//         query: gql`
//       query getAllUsers {
// 	    users {
//             id
//             name
//         }   
//     }
//     `
//     })
//     .then(result => console.log(result.data.users));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
