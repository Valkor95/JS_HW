// import { getWeather } from "./fetch.js";
// import { displayData } from "./displayData.js";

(function () {
    const weatherDiv = document.querySelector('.card-body');
    const buttonRechange = document.querySelector('.btn');

    getWeather(displayData).catch(error => {
        weatherDiv.innerHTML = `<p>Ошибка при получении данных о погоде: ${error.message}</p>`;
    });

    buttonRechange.addEventListener('click', () => getWeather(displayData).catch(error => {
        weatherDiv.innerHTML = `<p>Ошибка при получении данных о погоде: ${error.message}</p>`;
    }))
})();
