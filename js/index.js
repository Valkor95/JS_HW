(function () {
    const value = +prompt('Enter integer!')

    for (let i = 1; i <= 100; i++){
        if(Math.pow(i, 2) > value){
            break
        }
        console.log(i);
    }
})()