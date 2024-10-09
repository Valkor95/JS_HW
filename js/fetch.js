import {displayData} from "./displayData.js";

export const getAPI = async (value) => {
    const response = await fetch(`https://swapi.dev/api/${value}`);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();

    displayData(data.results || data);

};
