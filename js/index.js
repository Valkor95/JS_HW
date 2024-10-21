(function () {
    const sumReduce = () => {
        let valueItr = 0;

        return function operationSum (value){
            const result = value + valueItr;
            valueItr += value;
            return result;
        }
    }

    const sum = sumReduce()

    console.log(sum(4))
    console.log(sum(6))
    console.log(sum(10))
    console.log(sum(7))

})()