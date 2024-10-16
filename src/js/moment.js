(function (){
    const cardDiv = document.querySelector('.card-body');
    const alertPlaceholder = document.querySelector('#alertPlaceholder');
    const form = document.querySelector('#birthdateForm');
    const result = document.querySelector('#result')

    const birthday = moment('1995-08-04').format("D MMMM YYYY")
    cardDiv.append(birthday)

    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    const showError = (message) => {
        alertPlaceholder.innerHTML = `
             <div class="alert alert-danger alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
    }

    const clearAlert = () => {
        alertPlaceholder.innerHTML = '';
    }

    const birthTransform = (event) => {
        event.preventDefault();
        clearAlert();

        const inputValue = document.querySelector('#birthdate').value.trim();

        if (!dateRegex.test(inputValue)){
            showError('Error! Enter correct birthday - DD/MM/YYYY.');
            return;
        }

        const transformValue = moment(inputValue, 'DD/MM/YYYY').format('MMMM Do YYYY');

        result.innerHTML = `<p><strong>Birthday in new format:</strong> ${transformValue}</p>`
    }

    form.addEventListener('submit', birthTransform)


})()