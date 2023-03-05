const country = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data))
}

const displayCountry = countries => {
    const countryContainer = document.getElementById('all-countries');

    countries.forEach(countries => {
        const card = document.createElement('div');
        card.classList.add('country');
        card.innerHTML = `
        <h2>Country Name: ${countries.name.common}</h2>
        <h3 class='change-font'>Capital: ${countries.capital ? countries.capital[0] : 'No Capital'}</h3>
        <h3 class='change-font'>Continents: ${countries.region}</h3>
        <button onclick='countryDetail("${countries.cca2}")'>Details</button>
        `
        countryContainer.appendChild(card);
    })
}

const countryDetail = detail => {
    const url = `https://restcountries.com/v3.1/alpha/${detail}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCCA2(data[0]))
}

const displayCCA2 = cca2Code => {
    const detailContainer = document.getElementById('country-detail');
    detailContainer.classList.add('country');
    detailContainer.innerHTML = `
    <img src='${cca2Code.flags.png}' alt='flag' style="width: 120px">
    <h2>Country Name: ${cca2Code.name.common}</h2>
    <h3 class='change-font'>Capital: ${cca2Code.capital ? cca2Code.capital[0] : 'No Capital'}</h3>
    <h3 class='change-font'>Continents: ${cca2Code.region}</h3>
    `
}

country();