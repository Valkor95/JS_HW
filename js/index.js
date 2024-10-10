(function () {
    const request = +prompt('Please enter a three digit number!')

    if (request < 100 || request > 999){
        alert('Invalid format, please enter a 3 digit number!');
    }

    const digits = String(request).split('');

    const allSame = digits.every(digit => digit === digits[0]);

    const duplicates = new Set (digits).size < digits.length;

    console.log(`There are same digits? ${allSame ? 'Yes' : 'No'}`);
    console.log(`There are duplicates? ${duplicates ? 'Yes' : 'No'}`)

})()