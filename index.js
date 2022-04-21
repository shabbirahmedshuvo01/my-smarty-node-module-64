const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my personal over smarty pant!!! with auto restart')
});


const users = [
    { id: 1, name: 'Sabana', email: 'sabana@email.com', phone: '0178888888' },
    { id: 2, name: 'shabnur', email: 'shabnur@email.com', phone: '0178888888' },
    { id: 3, name: 'Shucorita', email: 'Shucorita@email.com', phone: '0178888888' },
    { id: 4, name: 'shuconda', email: 'shuconda@email.com', phone: '0178888888' },
    { id: 5, name: 'srabonti', email: 'srabonti@email.com', phone: '0178888888' },
    { id: 6, name: 'sabila', email: 'sabila@email.com', phone: '0178888888' },
    { id: 7, name: 'sohana', email: 'sohana@email.com', phone: '0178888888' },
]


app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users)
    }
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/fruits', (req, res) => {

    res.send(['mango', 'apple', 'oranges',]);
})


app.get('/fruits/mango/fazle', (req, res) => {
    res.json('sour sour faxlre flavor');
})


app.listen(port, () => {
    console.log('Listenig to port', port)
})