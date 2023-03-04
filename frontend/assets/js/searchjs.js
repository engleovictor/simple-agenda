addEventListener('click', event => {
    targetTag = event.target;
    typeName  = targetTag.getAttribute('type').toLowerCase();
    isSubmit  = (typeName === 'submit');

    if(isSubmit) {
        event.preventDefault();
        const keyPair = {
            key:   getInputValue('.selector'),
            value: getInputValue('.searchValue')
        }
        document.querySelector('.usersDataMenos').innerHTML = "";
        axios.post('/search', keyPair)
        .then(response => {
            const whatToShow = response.data;
            
            for(let i=0;i<whatToShow.length;i++) {
                document.querySelector('.usersDataMenos').innerHTML += makeTdTag(whatToShow[i]);
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
})

const getInputValue = className => document.querySelector(className).value;

const makeTdTag = fullUserData => `<tr><td>${fullUserData.id}</td><td>${fullUserData.name}</td><td>${fullUserData.email}</td><td>${fullUserData.phoneNumber}</td></tr>`;