// promise
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then(users => console.log(users)) // resolve
  .catch(err => console.log(err.message)); // reject

// // promisify
// const { promisify } = require('util');
 
// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
//     if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }
 
// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);

// getUsersPromise(false)
//   .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
//   .catch(err => console.log(err.message));
 
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message)); // cannot retrieve users due offline

// // mengubah fungsi bawaan node JS
// const fs = require('fs');

// const readFilePromise = promisify(fs.readFile);

// readFilePromise('./data.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));
