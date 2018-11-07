let User = require('../Models/User')


let UserController = {
    
    store(req, res) {
        User.create({
            nick: req.body.nick,
            contrasena: req.body.contrasena
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }, find(req, res) {
        User.findById({ _id: req.params.id }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}





module.exports = UserController;