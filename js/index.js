(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    let alertVisible = false;
    const appendAlert = (message, type) => {

        if (alertVisible) {
            removeAlert();
            alertVisible = false;
        } else {

            const wrapper = document.createElement('div')
            wrapper.classList.add('alert-wrapper');
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper);
            alertVisible = true;
        }
    }

    const removeAlert = () => {
        const alertWrapper = document.querySelector('.alert-wrapper');
        if (alertWrapper) {
            alertWrapper.remove();
        }
    };


    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Nice, you triggered this alert message!', 'success')
        })
    }
})()