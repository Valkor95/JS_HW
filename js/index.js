(function () {
    function askQuestion(question, cancelMessage) {
        let answer = prompt(question);
        if (answer === null) {
            alert(`It is a pity that you did not want to enter ${cancelMessage}.`);
            return `It is a pity that you did not want to enter ${cancelMessage}.`;
        }

        return answer;
    }

    const birthYear = askQuestion("Enter your age: \n (only numbers)", "your age");
    const city = askQuestion("What city do you live? \n Kyiv, Washington, London or another?", "your city");
    const kindOfSport = askQuestion("Your favorite sport: \n football, basketball, bjj or another?", "your favorite sport");

    const cancelMessages = [];

    let ageMessage = "";
    if (isNaN(birthYear) || birthYear.includes("It is a pity") || birthYear === '') {
        const error = `This error value age: ${birthYear}`
        cancelMessages.push(error);
    } else {
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        ageMessage = `Your age: ${age}`;
    }

    let cityMessage = "";
    const capitals = {
        kyiv: "Ukraine",
        washington: "USA",
        london: "Great Britain",
    };

    if (city.includes("It is a pity") || city === '') {
        const emptyCity = `It is a pity that you did not want to enter your city`
        cancelMessages.push(emptyCity);
    } else {
        cityMessage = capitals[city.toLowerCase()]
            ? `You live in the capital of ${capitals[city.toLowerCase()]}!`
            : `You live in the city ${city}.`;
    }

    let sportMessage = "";
    const sports = {
        football: "Lionel Messi",
        basketball: "Michael Jordan",
        bjj: "Craig Jones",
    };

    if (kindOfSport.includes("It is a pity") || kindOfSport === '') {
        const emptySport = `It is a pity that you did not want to enter your favorite sport`
        cancelMessages.push(emptySport);
    } else {
        sportMessage = sports[kindOfSport.toLowerCase()]
            ? `Cool! Do you want to become like ${sports[kindOfSport.toLowerCase()]} in ${kindOfSport}?`
            : `Your favorite sport: ${kindOfSport}.`;
    }

    const finalMessage = [
        ageMessage,
        cityMessage,
        sportMessage,
        ...cancelMessages,
    ].filter(Boolean).join("\n");

    alert(finalMessage);

})()