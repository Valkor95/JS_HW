(function () {

    const array = [1, 3, 4, 6, 2, 5, 7]

    const removeItem = (arr, item) => {
        const newArr = arr.filter(value => value !== item)

        return newArr;
    }

    console.log(removeItem( array, 4))
    console.log(removeItem( array, 1))


})()