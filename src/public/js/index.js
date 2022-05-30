const backEndUrl = 'http://localhost:4006/'


async function getUsers() {
    let users = await request('users')
    renderUsers(users)
}

async function renderUsers(users) {
    console.log(users);

    for (let user of users) {
        const userImg = new String(`/getFile/${user.user_img}/${token}`)

        chatsList.innerHTML += `
            <li class="chats-item"
                onclick="setChat('${userImg}', '${user.username}')"
            >
                <img src="${userImg}" alt="profile-picture">
                <p>${user.username} <span class="${user.socket_id ? 'online-indicator' : ''}"></span></p>
            </li>
        `
    }
}

async function setChat(userImg, username) {
    chatUsername.textContent = username
    chatPhoto.src = userImg
}


async function renderAvatarData() {

    profileAvatar.src = backEndUrl + 'getPhoto/' + token
    const user = await request('/getUsername/' + token)
    profileUsername.textContent = user.username
}

renderAvatarData()
getUsers()