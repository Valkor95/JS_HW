(function () {
    function itteration (){
        let userNumber = null;
        for (let i = 0; i <= 10; i++){
            userNumber = prompt('Enter a number greater than one hundred!')

            if (userNumber === null) {
                alert("Input was cancelled.");
                return;
            }

            const num = Number(userNumber);

            if (!isNaN(num) && num > 100) {
                alert(`You entered: ${userNumber}`);
                return;
            } else {
                alert("Please enter a number greater than 100!");
            }
        }

        alert(`The last number: ${userNumber}`);
    }

    itteration();
})()