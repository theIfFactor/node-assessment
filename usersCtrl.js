var users = require('./userData.json');

module.exports = {
    getUsers: (req, res) => {
        let tempUsers = users.slice();
        
        if(req.query.age){
            tempUsers = tempUsers.filter(user => user.age < req.query.age);
        }
        if(req.query.lastname){
            tempUsers = tempUsers.filter(user => user.last_name === req.query.lastname);
        }
        if(req.query.email){
            tempUsers = tempUsers.filter(user => user.email === req.query.email);
        }
        if(req.query.favorites){
            tempUsers = tempUsers.filter(user => user.favorites.indexOf(req.query.favorites) !== -1);
        }
        res.send(tempUsers)
    },
    findUser: (req, res) => {
        let user = users.find(user => user.id == req.params.id);
        user ? res.send(user): res.status(404).json(null)
    },
    getAdmins: (req, res) => {
        res.send(users.filter(user => user.type === "admin"))
    },
    getNonAdmins: (req, res) => {
        res.send(users.filter(user => user.type !== "admin"))
    },
    getUSerByType: (req, res) => {
        res.send(users.filter(user => user.type === req.params.type))
    },
    updateUser: (req, res) => {
        users.splice(users.findIndex(user => user.id == req.body.id),1, req.body);
        res.send(users);
    },
    deleteUser:(req, res) => {
        users.splice(users.findIndex(user => user.id == req.params.id), 1);
        res.send(users);
    },
    addUser:(req, res) => {
        let user = req.body;
        user.id = users[users.length - 1].id + 1;
        users.push(user);
        res.send(users);
    }
}