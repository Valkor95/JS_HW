(function () {
    let hours = 1;
    let minutes = 25;

    const example = document.querySelector('#example')

    const timerUpdate = () => {
        const formatTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
        example.innerHTML = `
        <h1>${formatTime}</h1>
        `
        example.classList.add('start')
    }

    const funcTimer = () => {
        minutes++;
        timerUpdate();

        if(hours === 1 && minutes === 27){
            clearInterval(timer);
            example.classList.replace('start', 'finish');
        }
    }

    const timer = setInterval(funcTimer, 1000)

    timerUpdate()

})()