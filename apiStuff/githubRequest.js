const got = require('got');

const url = 'https://api.github.com/repos/sinatra/sinatra';

const handleReceivedResponse = (response) => {
  const responseObject = JSON.parse(response.body)
  console.log(responseObject);
}

got(url).then(handleReceivedResponse);