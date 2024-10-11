(function () {
    function askQuestion(question, cancelMessage) {
        let answer = prompt(question);
        if (answer === null) {
            alert(`It is a pity that you did not want to enter ${cancelMessage}.`);
            return null;
        }
        return answer;
    }

    const birthYear = askQuestion("Enter your age: \n (only numbers)", "your age!");
    if (birthYear) {
        const city = askQuestion("What city do you live? \n Kyiv, Vashington, London or another?", "your city!");
        if (city) {
            const kindOfSport = askQuestion("Your favorite sport: \n football, basketball, bjj or another?", "your favorite sport!");
            if (kindOfSport) {
                // Обчислюємо вік
                const currentYear = new Date().getFullYear();
                const age = currentYear - birthYear;

                // Повідомлення про місто
                const capitals = {
                    kyiv: "Ukraine",
                    vashington: "USA",
                    london: "Great Britain",
                };

                const cityMessage = capitals[city.toLowerCase()]
                    ? `You live in the capital of ${capitals[city.toLowerCase()]}!`
                    : `You live in the city ${city}`


                const sports = {
                    football: "Lionel Messi",
                    basketball: "Michael Jordan",
                    bjj: "Craig Jones",
                };

                const sportMessage = sports[kindOfSport.toLowerCase()]
                    ? `Cool! Do you want to become like ${sports[kindOfSport.toLowerCase()]} in ${kindOfSport}?`
                    : `Your favorite sport: ${kindOfSport}`

                alert(`Your age: ${age} \n ${cityMessage} \n ${sportMessage}`);
            }
        }
    }


})()