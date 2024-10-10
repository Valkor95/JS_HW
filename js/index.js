(function () {
    const type = [1, 'a', null, undefined, 134566n, true, Symbol('Hi'), {name: 'Johny'}, function(){}, [1, 2, 3]]

    for (i = 0; i < type.length; i++){
        console.log(typeof type[i])
    }
})()