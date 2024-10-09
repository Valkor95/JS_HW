import { getAPI } from "./fetch.js";

(function () {
    const infoDiv = document.querySelector('.info');
    const buttonsDiv = document.querySelector('.buttons');

    function buttonClick(event) {
        if (event.target.tagName === 'BUTTON') {
            if (event.target.classList.contains('planets')) {
                getAPI('planets')
            } else if (event.target.classList.contains('people')) {
                getAPI('people')
            } else if (event.target.classList.contains('vehicles')) {
                getAPI('vehicles')
            }
        }
    }

    buttonsDiv.addEventListener('click', buttonClick)
})();
