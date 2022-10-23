const got = require('got');

const BASE_URL = 'https://api.github.com/repos/';

const fetchRepositoryInfo = (repoName, cbFunction) => {
  const url = BASE_URL + repoName;
  const responseHandler = (response) => {
    const repoData = JSON.parse(response.body)
  cbFunction(repoData);
};

got(url).then(responseHandler)

};

module.exports = fetchRepositoryInfo;
