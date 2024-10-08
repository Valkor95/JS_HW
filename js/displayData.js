export const displayData = (data) => {
    const weatherDiv = document.querySelector('.card-body');

    try {
        let weatherInfo = `<h1>Погода в ${data.name}</h1>`;
        weatherInfo += `<p><span>Координаты:</span> (${data.coord.lat}, ${data.coord.lon})</p>`;

        weatherInfo += `<h2>Основные параметры:</h2>`;
        for (const key in data.main) {
            weatherInfo += `<p><span>${key}:</span> ${data.main[key]}</p>`;
        }

        weatherInfo += `<h2>Дополнительные условия:</h2>`;
        for (const condition of data.weather) {
            weatherInfo += `<p><span>${condition.main}:</span> ${condition.description}</p>`;
        }
        weatherDiv.innerHTML = weatherInfo;
    } catch (error) {
        weatherDiv.innerHTML = `<p>${error.message}</p>`;
    }
};
