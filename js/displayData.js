export const displayData = (data) => {
    const infoDiv = document.querySelector('div .info');
    infoDiv.innerHTML = ''

    try {
        if (Array.isArray(data)) {
            data.forEach(info => {
                const infoItem = document.createElement('div');

                infoItem.classList.add('card', 'mb-3');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                Object.entries(info).forEach(([key, value]) => {
                    const item = document.createElement('p');
                    item.innerHTML = `<strong>${key}:</strong> ${value}`;
                    cardBody.append(item);
                });

                infoItem.append(cardBody)
                infoDiv.append(infoItem);
            });
        } else {
            const infoItem = document.createElement('div');
            infoItem.classList.add('card', 'mb-3');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            Object.entries(data).forEach(([key, value]) => {
                const item = document.createElement('p');
                item.innerHTML = `<strong>${key}:</strong> ${value}`;
                cardBody.append(item);
            });
            infoItem.append(cardBody);
            infoDiv.append(infoItem);
        }

    } catch (error){
        infoDiv.innerHTML = `<p>${error.message}</p>`;
    }
};
