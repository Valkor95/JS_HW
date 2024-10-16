(function () {

    const arrValue = [3, 'welcome', true, 3, 6, 'end']
    const arrValue2 = ['welcome', true, 'end', '3']

    const filtrArr = function (arr) {
        let sum = 0;
        let quantity = 0;

        for (let i = 0; i < arr.length; i++){
            if(typeof arr[i] === 'number'){
                quantity++;
                sum += arr[i];
            }
        }

        const average = quantity === 0 ? 'There are no numbers at all!' : sum/quantity;
        return average;
    }

    console.log(filtrArr( arrValue))
    console.log(filtrArr( arrValue2))


})()