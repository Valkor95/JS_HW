(function () {
    const apiKey = 'e7e3d66c2dafbe50adb8343082912ce9';
    const lat = 46.40;
    const lon = 30.50;
    const weatherDiv = document.querySelector('.card-body');
    const buttonRechange = document.querySelector('.btn');


    const getWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            const data = await response.json();

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

    getWeather()
;
})()