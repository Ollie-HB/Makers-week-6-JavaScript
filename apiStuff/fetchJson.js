const got = require('got');

const fetchJson = (url, cb) => {
  got(url).then((response) => {
    const data = JSON.parse(response.body); 
    cb(data);
  });
};

module.exports = fetchJson;

// In node

// const fetchJson = require('./fetchJson');

// fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
//   console.log(response);
// })