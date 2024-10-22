(function () {
    function summary (a){
        return function secondArgument(b){
            return a + b;
        }
    }

    console.log(summary(5)(2))
    console.log(summary(2)(3))
    console.log(summary(10)(89))
})()