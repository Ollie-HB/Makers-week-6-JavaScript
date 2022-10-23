const GithubApi = require("./githubApi");
const Github = require("./github");

describe('Github', () => {
  it('can get repo data from sinatra', (done) => {
    const mockedApi = {
      fetchRepositoryData: (_, cb) => {
        const mockData = {full_name : "sinatra/sinatra" };
        cb(mockData);
      }
    };
    const github = new Github(mockedApi);
    github.fetch("sinatra/sinatra")

    setTimeout(() => {
      const repoData = github.getRepoData();
      expect(repoData.full_name).toEqual("sinatra/sinatra");
      done();
      }, 0)
    });
});

// describe('Github', () => {
//   it('can get repo data from sinatra', (done) => {
//     const api = new GithubApi();
//     const github = new Github(api);
//     github.fetch("sinatra/sinatra")

//     setTimeout(() => {
//       const repoData = github.getRepoData();
//       expect(repoData.full_name).toEqual("sinatra/sinatra");
//       done();
//     }, 500)
//   });

//   it('can get repo data from jest', (done) => {
//     const api = new GithubApi();
//     const github = new Github(api);
//     github.fetch("facebook/jest")

//     setTimeout(() => {
//       const repoData = github.getRepoData();
//       expect(repoData.full_name).toEqual("facebook/jest");
//       done();
//     }, 500)
//   });
// });








  
  //   });
  // }); 