(function () {
    const array = [1, 0, 3, 6, 9];

    const value1 = array.join(' ')

    console.log(value1)

    // 2 variant

    let value2 = '';

    for (let i = 0; i < array.length; i++){
        value2 += `${array[i]} `
    }
    console.log(value2)
})()