(function () {
    const filtrFunc = function (text, ...values) {
        const argumentsData = Array.isArray(values[0]) ? values[0] : values;

        const newText = text.split("").filter(item => !argumentsData.includes(item)).join("")
        return newText;
    }

    console.log(filtrFunc( "Hello, World!", 'l', 'd'))
    console.log(filtrFunc( "Hello, World!", ['l', 'd', 'o']))
})()