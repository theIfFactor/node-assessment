const express = require('express'),
    bodyParser = require('body-parser'),
    userCtlr = require(`./usersCtrl`);

const app = express();
app.use(bodyParser.json());

app.get('/api/users', userCtlr.getUsers);
app.get('/api/users/:id', userCtlr.findUser);
app.get('/api/admins', userCtlr.getAdmins);
app.get('/api/nonadmins', userCtlr.getNonAdmins);
app.get('/api/user_type/:type', userCtlr.getUSerByType);
app.put('/api/users/:id', userCtlr.updateUser);
app.post('/api/users', userCtlr.addUser);
app.delete('/api/users/:id', userCtlr.deleteUser);

///////////////
///LISTENING///
///////////////
const port = 3000;
app.listen(port, () => {
    console.log(`Yo, What up? i'm port ${port} and welcome to my crib`);
})