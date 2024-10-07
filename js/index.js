(function () {
    const hours = 1;
    const minutes = 25;

    const example = document.querySelector('#example')

    const timerUpdate = () => {
        const formatTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
        const title = example.innerHTML = `
        <h1>${formatTime}<h1/>
        `
        title.classList.add('start')

    }
})()