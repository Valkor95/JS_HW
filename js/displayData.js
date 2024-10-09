export const displayData = (data) => {
    const infoDiv = document.querySelector('.info');
    infoDiv.innerHTML = '';

    try {
        data.forEach(info => {
            const infoItem = document.createElement('div');
            infoItem.classList.add('card', 'mb-3', 'p-5');

            Object.entries(info).forEach(([key, value]) => {
                const item = document.createElement('p');
                item.innerHTML = `<strong>${key}:</strong> ${value}`;
                infoItem.append(item);
            });

            infoDiv.append(infoItem);
        });
    } catch (error) {
        infoDiv.innerHTML = `<p>${error.message}</p>`;
    }
};
