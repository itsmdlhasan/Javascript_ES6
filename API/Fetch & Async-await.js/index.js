const getData = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(tumi => showData(tumi))
        .catch(err => {
            console.log(err);
        });
};

// const getData = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     try {
//         const res = await fetch(url);
//         const tumi = await res.json();
//         showData(tumi);
//     } catch (err) {
//         console.log(err);
//     }
// };


const showData = (tumi) => {
    console.log(tumi);
    const postContainer = document.getElementById('post-info');
    for (const tum of tumi.slice(0, 5)) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${tum.body}</h2>
        `
        postContainer.appendChild(div);
    }
}
getData();