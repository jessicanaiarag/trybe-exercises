const fetch = require('')

const getUserReposUrl = (username) = `https://api.github.com/users/${username}`;

//recupera as informações do usuário a partir do username

const getUserRepositoryInfoFromUsername = async (username) => {
    const url = getUserReposUrl(username);
    const response = await fetch(url);
    const repositoryInfo = await response.json();

    let { name, company, twitter_username: twitter, location } = repositoryInfo;

    return {
        name,
        company,
        twitter,
        location
    }
}

module.exports = { getUserRepositoryInfoFromUsername, getUserReposUrl }