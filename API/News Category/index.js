// 1. category container
const fetchNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showNews(data.data))
        .catch(err => console.log(err))
}

    // category container links
const showNews = (data) => {
    const categoryLinks = document.getElementById('category-links');
    data.news_category.forEach(categoryLink => {
        const li = document.createElement('li');
        li.innerHTML = `<a onclick="activateLinks('${categoryLink.category_id}', '${categoryLink.category_name}')" class="nav-link" href="#">${categoryLink.category_name}</a>`
        categoryLinks.appendChild(li);
    })
}

// 2. category container links activation
const activateLinks = (category_id, category_name) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => linkRelating(data.data, category_name))
        .catch(err => console.log(err))
}

    // alert box
const linkRelating = (data, category_name) => {
    const newsCount = document.getElementById('news-count');
    const categoryName = document.getElementById('category-name');
    newsCount.innerText = data.length;
    categoryName.innerText = category_name;

    // new ui
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ' ';
    data.forEach(singleNews => {
        const card = document.createElement('div');
        card.classList.add('card', 'd-flex', 'flex-row');
        card.innerHTML = `
            <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
        `
        newsContainer.appendChild(card);
    })
}
