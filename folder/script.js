import data from './data'

const apiURL = "https://api.github.com/users/Ashu-Kumar40"
const profileImg = document.querySelector(".profile-image");
const profileName = document.querySelector(".Profile-name");
const username = document.querySelector(".username");
const profileBtn = document.querySelector(".profile-btn");
const div = document.createElement("div")

async function getData(){
    await fetch(apiURL).then((response)=>{
        return response.json();
    }).then((data)=>{
        profileName.textContent = data.name;
        username.textContent = data.login;
        profileImg.setAttribute("src", data.avatar_url)
        profileBtn.setAttribute("href", data.html_url)
        console.log(data);
    })
}

getData();