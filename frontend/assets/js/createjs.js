addEventListener('click', event => {
    targetTag = event.target;
    typeName  = targetTag.getAttribute('type').toLowerCase();
    isSubmit  = (typeName === 'submit');

    if(isSubmit) {
        event.preventDefault();
        userData = {
            name:        getInputValue(".name"),
            email:       getInputValue(".email"),
            phoneNumber: getInputValue(".phoneNumber")
        };
            axios.post('/create', userData)
            .then(response => {
                const userDataFlags = response.data;
                if(userDataFlags.name & userDataFlags.email & userDataFlags.phoneNumber) {
                    document.querySelector('.userConsole').innerHTML = 'Criado com Sucesso!';
                } else {
                    document.querySelector('.userConsole').innerHTML = 'Erro: Verifique se tudo esta correto.'
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})

const getInputValue = className => document.querySelector(className).value;
