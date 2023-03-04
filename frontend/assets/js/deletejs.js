addEventListener('click', event => {
    targetTag = event.target;
    typeName  = targetTag.getAttribute('type').toLowerCase();
    isSubmit  = (typeName === 'submit');

    if(isSubmit) {
        event.preventDefault();
        const keyPair = {
            key:   getInputValue('.selector'),
            value: getInputValue('.deleteValue')
        }
        axios.post('/delete', keyPair)
            .then(response => {
                const wasDeleted = response.data;
                if(wasDeleted.err) {
                    document.querySelector(".userConsole").innerHTML = "Apagado com sucesso!";
                } else {
                    document.querySelector(".userConsole").innerHTML = "Ocorreu um erro...";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
})

const getInputValue = className => document.querySelector(className).value;