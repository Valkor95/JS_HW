(function () {
    const div = document.querySelector('#example')

    const user1 = prompt('Information from user1');
    const user2 = prompt('Information from user2')
    const user3 = prompt('Information from user3')

    div.innerHTML = `
        <p>${user1}</p>
        <p>${user2}</p>
        <p>${user3}</p>
    `
})()