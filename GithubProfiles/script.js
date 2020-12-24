const url = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(user) {
    const response = await fetch(url + user);
    const responseData = await response.json();
    console.log(responseData);
    createUserCard(responseData);
    getRepos(user);

}

async function getRepos(username) {
    const response = await fetch(url+username+"/repos");
    const responseData = await response.json();
    console.log(responseData);
    addReposToCard(responseData);

}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div class = "img-container">
            <img class ="avatar" src="${user.avatar_url}"  alt= "${user.name}" />
        </div>
        <div class = "userInfo">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul class ="info">
                <li>${user.followers}</li>
                <strong>Followers</strong>
                <li>${user.following}</li>
                <strong>Following</strong>
                <li>${user.public_repos}</li>
                <strong>Repos</strong>
            </ul>
            <div id ="repos"> </div>
        </div>
    </div>
               `;
    main.innerHTML = cardHTML;

}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos
        .sort((a,b) => b.stargazers_count - a.stargazers_count)
        .slice(0,10)
        .forEach((repo) => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;
            reposEl.appendChild(repoEl);
        });
}


form.addEventListener('submit', e=> {
    e.preventDefault();
    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
});