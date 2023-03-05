const randomUser = () => {
    const url = 'https://randomuser.me/api/';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    document.getElementById("user-image").src = user.results[0].picture.large;
    document.getElementById('user-name').innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first;
    document.getElementById('user-age').innerHTML = user.results[0].dob.age;
    document.getElementById('user-gender').innerHTML = user.results[0].gender;
    document.getElementById('user-phone').innerHTML = user.results[0].phone;
}