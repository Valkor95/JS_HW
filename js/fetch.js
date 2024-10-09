export const getAPI = async (value) => {
    const response = await fetch(`https://swapi.dev/api/${value}`);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export const fetchNextData = async (nextUrl) => {
    const response = await fetch(nextUrl);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
