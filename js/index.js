(function () {
    const apiKey = 'e7e3d66c2dafbe50adb8343082912ce9';
    const lat = 46.29;
    const lon = 30.43;
    const weatherDiv = document.querySelector('#example');
    const buttonRechange = document.createElement('button');
    buttonRechange.classList.add('rechange');
    buttonRechange.textContent = 'Rechange';
    weatherDiv.insertAdjacentElement('afterend', buttonRechange);

})()