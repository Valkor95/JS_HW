(function (){
    const cardDiv = document.querySelector('.card-body');

    const birthday = moment('1995-08-04').format("D MMMM YYYY")

    cardDiv.append(birthday)
})()