const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.json());

app.post('/createUser', (req, res) => {
    console.log(req.body);
    store
        .createUser({
            username: req.body.username,
            password: req.body.password
        })
        .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
    store
        .authenticate({
            username: req.body.username,
            password: req.body.password
        })
        .then(({ success }) => {
            if (success) res.sendStatus(200)
            else res.sendStatus(401)
        })
})
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001')
})