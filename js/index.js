(function () {
    let initialHours = 0;
    let initialMinutes = 1;
    let initialSeconds = 25;

    let intervalId = null;
    let elapsedTime = 0;
    let remainingTime = null;

    const example = document.querySelector('#example');
    const buttonTimer = document.createElement('button');
    buttonTimer.textContent = 'Завести таймер';

    const buttonReset = document.createElement('button');
    buttonReset.textContent = 'Сбросить таймер';

    // Начальное время в секундах
    let totalTimeInSeconds = initialHours * 3600 + initialMinutes * 60 + initialSeconds;

    const timerUpdate = (time) => {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        example.innerHTML = `<h1>${formattedTime}</h1>`;
    };

    const startTimer = () => {
        let addSeconds = parseInt(prompt("Введіть час у секундах", "0"), 10);

        if (isNaN(addSeconds) || addSeconds < 0) {
            alert('Будь ласка, введіть коректне число.');
            return;
        }

        // elapsedTime = 0;
        if (remainingTime !== null) {
            totalTimeInSeconds += remainingTime; // Продолжаем с оставшимся временем
        } else {
            remainingTime = addSeconds; // Сохраняем новое значение
        }

        intervalId = setInterval(() => {
            elapsedTime++;
            remainingTime--;

            let currentTotalTimeInSeconds = totalTimeInSeconds + elapsedTime;

            timerUpdate(currentTotalTimeInSeconds);


            if (remainingTime <= 0) {
                clearInterval(intervalId);
                alert('Таймер завершив роботу!');
                remainingTime = null;
            }
        }, 1000);
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        elapsedTime = 0;
        remainingTime = null;
        timerUpdate(totalTimeInSeconds);
    };

    buttonTimer.addEventListener('click', startTimer);
    buttonReset.addEventListener('click', resetTimer);
    example.insertAdjacentElement('afterend', buttonTimer);
    example.insertAdjacentElement('afterend', buttonReset);
    timerUpdate(totalTimeInSeconds);
})();
