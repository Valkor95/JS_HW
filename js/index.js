import { getAPI, fetchNextData } from "./fetch.js";
import { displayData } from "./displayData.js";

(function () {
    const infoDiv = document.querySelector('.info');
    const buttonsDiv = document.querySelector('.buttons');
    let nextUrl = null;

    function buttonClick(event) {
        if (event.target.tagName === 'BUTTON') {
            const value = event.target.classList[0];
            fetchData(value);
        }
    }

    async function fetchData(value) {
        try {
            const data = await getAPI(value);
            displayData(data.results);
            nextUrl = data.next;

            if (nextUrl) {
                createNextButton();
            }
        } catch (error) {
            infoDiv.innerHTML = `<p>Ошибка при получении данных: ${error.message}</p>`;
        }
    }

    function createNextButton() {

        let nextButton = document.querySelector('.next-button');
        if (!nextButton) {
            nextButton = document.createElement('button');
            nextButton.classList.add('next-button', 'btn', 'btn-secondary');
            nextButton.textContent = 'Загрузить следующие 10';
            nextButton.addEventListener('click', fetchNext);

            infoDiv.insertAdjacentElement('afterend', nextButton);
        }
    }

    async function fetchNext() {
        if (!nextUrl) return;

        try {
            const data = await fetchNextData(nextUrl);
            displayData(data.results);

            nextUrl = data.next;
            if (!nextUrl) {
                removeNextButton();
            }
        } catch (error) {
            infoDiv.innerHTML = `<p>Ошибка при получении данных: ${error.message}</p>`;
        }
    }

    function removeNextButton() {
        const nextButton = document.querySelector('.next-button');
        if (nextButton) {
            nextButton.remove();
        }
    }

    buttonsDiv.addEventListener('click', buttonClick);
})();
