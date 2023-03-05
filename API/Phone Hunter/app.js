const loadPhones = async (searchField, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit)
}

const displayPhones = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.innerHTML = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    //display no phones found
    const emptyMsg = document.getElementById('empty-msg');
    if (phones.length === 0) {
        emptyMsg.classList.remove('d-none');
    }
    else {
        emptyMsg.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phones => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
            <img src="${phones.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phones.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                <button onclick='loadPhoneDetails("${phones.slug}")' href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Details</button>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);
    })

    // stop loader
    toggleLoader(false)
}

// data limit function
const processSearch = (dataLimit) => {
    // start loader
    toggleLoader(true);
    const searchField = document.getElementById('search-field').value;
    loadPhones(searchField, dataLimit);
}

// input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        processSearch(10);
    }
})


// search button listener
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10);
})



// toggler
const toggleLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

// not the best way to load show all
document.getElementById('show-all').addEventListener('click', function () {
    processSearch();
})

// load phone detail function
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    document.getElementById('phoneDetailModalLabel').innerText = phone.name;
    document.getElementById('phonePara').innerHTML =   `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'Not Found'}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No storage information'}</p>
    <p>Bluetooth Version: ${phone.others ? phone.others.Bluetooth : 'No bluetooth information'}</p>
    `
}

loadPhones('apple');