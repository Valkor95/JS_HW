const apiKey = 'e7e3d66c2dafbe50adb8343082912ce9';
const lat = 46.40;
const lon = 30.50;

export const getWeather = async (func) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    func(data);
};
