function kanyeQuote() {
    fetch('https://api.kanye.rest/')
        .then((response) => response.json())
        .then((data) => randomQuote(data));
}

const randomQuote = data => {
    document.getElementById('random-quote').innerText = data.quote;
}