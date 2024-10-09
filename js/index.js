(function () {
    let hours = 0;
    let minutes = 1;
    let seconds = 25;
    let hoursEnd = null;
    let minutesEnd = null;
    let secondsEnd = null;
    let intervalId = null;

    const example = document.querySelector('#example')
    const buttonTimer = document.createElement('button')
    buttonTimer.textContent = 'Завести таймер';

    const timerUpdate = () => {
        const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        example.innerHTML = `
        <h1>${time}</h1>
        `
    }

    const timer = () => {
        hoursEnd = parseInt(prompt("Введіть години", "0"), 10);
        minutesEnd = parseInt(prompt("Введіть хвилини", "0"), 10);
        secondsEnd = parseInt(prompt("Введіть секунди", "0"), 10);

    }

    const startTimer = () => {
        timer();

        intervalId = setInterval(() => {
            seconds++;
            if (seconds === 60){
                minutes++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours++
                minutes = 0;
            }
            if (hours === 24) hours = 0;

            timerUpdate();

            if (hours > hoursEnd ||
                (hours === hoursEnd && minutes > minutesEnd) ||
                (hours === hoursEnd && minutes === minutesEnd && seconds >= secondsEnd)){
                clearInterval(intervalId);
                alert('Таймер завершив роботу!')
            }
        }, 1000)

    };
    buttonTimer.addEventListener('click', startTimer);
    example.insertAdjacentElement('afterend', buttonTimer);
    timerUpdate()

})()