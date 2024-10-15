(function () {
    const num = +prompt('Enter integer!')

    const isPrime = (number) => {
        if (number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0){
                return false;
            }
        }
        return true
     }

    console.log( isPrime(num) ? `${num} is prime number` : `${num} is not prime number`)

})()