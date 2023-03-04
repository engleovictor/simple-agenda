addEventListener('click', event => {
    targetTag = event.target;
    className  = targetTag.getAttribute('class').toLowerCase();
    isSearch  = (className === 'searchbutton');
    isUpdate = (className === 'updatebutton');

    if(isSearch) {
        event.preventDefault()
        const keyPair = {
            key:   getInputValue('.selector'),
            value: getInputValue('.updateValue')
        }

        axios.post('/update', keyPair)
        .then(response => {
            const userData = response.data;
            if(userData.name != undefined) {
                document.querySelector(".nameInput").value = userData.name;
                document.querySelector(".emailInput").value = userData.email;
                document.querySelector(".phoneNumberInput").value = userData.phoneNumber;
            } else {
                document.querySelector(".nameInput").value = "";
                document.querySelector(".emailInput").value = "";
                document.querySelector(".phoneNumberInput").value = "";
            }
    
        })
    }

    if(isUpdate) {
        event.preventDefault();
        const valuer = document.querySelector(".selector").value;
        const userData = {
            name:        getInputValue(".nameInput"),
            email:       getInputValue(".emailInput"),
            phoneNumber: getInputValue(".phoneNumberInput"),
            key:         getInputValue(".selector"),
            value:       getInputValue(".updateValue")
        };
        axios.put('/update', userData)
        .then(response => {
            const userDataFlags = response.data;
            if(userDataFlags.name & userDataFlags.email & userDataFlags.phoneNumber) {
                document.querySelector('.userConsole').innerHTML = 'Atualizado com Sucesso!';
                document.querySelector('.updateValue').value = getInputValue('.'+valuer+'Input');
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