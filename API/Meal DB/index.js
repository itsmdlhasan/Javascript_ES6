const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <button onclick='loadMealDetail(${meal.idMeal})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailModal">
                Launch Detail
                </button>
            </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    document.getElementById('mealDetailModalLabel').innerText = meal.strMeal;
    document.getElementById('mealDetailModalBody').innerText = meal.strInstructions;
    ;
}



loadMeals('fish');

let loadMoreBtn = document.getElementById('load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.card')];
    console.log(boxes);
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}