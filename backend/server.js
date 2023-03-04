const express = require('express');
const bodyParser = require('body-parser');
const validateCreate = require('./validateCreate');
const addToDataBase = require('./addToDataBase');
const deleteFromDataBase = require('./deleteFromDataBase');
const getFromDataBase = require('./getFromDataBase');
const updateDataInDataBase = require('./updateDataInDataBase');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const frontendPath = '/home/laplace/Projects/simple-agenda/frontend/'; 

app.get('/', (req, res) => {
    res.sendFile(frontendPath+'/html/'+'index.html');
});

app.get('/indexjs', (req, res) => {
    res.sendFile(frontendPath+'/assets/js/'+'indexjs.js');
});

htmlPages = [
    'create',
    'delete',
    'update',
    'search'
];

for(let i=0;i<htmlPages.length;i++) {
    app.get('/'+htmlPages[i], (req, res) => {
        res.sendFile(frontendPath+'/html/'+htmlPages[i]+'.html');
    });

    app.get('/'+htmlPages[i]+'js', (req, res) => {
        res.sendFile(frontendPath+'/assets/js/'+htmlPages[i]+'js.js');
    });
}

app.post('/create', (req, res) => {
    const userData = req.body;
    const userDataFlags = validateCreate(userData)
    res.send(userDataFlags);
    if(userDataFlags.name & userDataFlags.email & userDataFlags.phoneNumber) {
        addToDataBase(userData);
    }
});

app.post('/delete', (req, res) => {
    const keyPair = req.body;
    deleteFromDataBase(keyPair)
    .then(wasDeleted => {
        console.log(wasDeleted);
        res.send(wasDeleted);
    })
});

app.post('/search', (req, res) => {
    const keyPair = req.body;
    getFromDataBase(keyPair)
    .then(bigData => {
        res.send(bigData);
    })
});

app.post('/update', (req, res) => {
    const keyPair = req.body;
    getFromDataBase(keyPair)
    .then(userData => {
        res.send(userData[0]);
    })
});

app.put('/update', (req, res) => {
    const userData = req.body;
    const userDataFlags = validateCreate(userData)
    res.send(userDataFlags);
    if(userDataFlags.name & userDataFlags.email & userDataFlags.phoneNumber) {
        updateDataInDataBase(userData);
    }
});

console.log('Servidor em http://0.0.0.0:3000/')
app.listen(3000);
