(function () {
    let numOrStr = prompt('input number or string');

    switch (true) {
        case numOrStr === null:
            console.log('You reject!');
            break;
        case numOrStr === '':
            console.log('Empty string!');
            break;
        case /^[0-9]+$/.test(numOrStr):
        case /^[a-zA-Z]+$/.test(numOrStr):
            console.log('OK!');
            break;
        default:
            console.log('Number is Ba_NaN')
    }
})()