let Student = require('../Models/Student')


let StudentController = {
    //mostrar
    show(req, res) {
        Student.find({}).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
        //crear
    }, store(req, res) {
        Student.create({
            name: req.body.name,
            email: req.body.email
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }, find(req, res) {
        Student.findById({ _id: req.params.id }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    update(req, res) {
        Student.update({ _id: req.params.id }, {
            name: req.body.name,
            email: req.body.email
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },destroy(req, res) {
        Student.findByIdAndRemove({ _id: req.params.id }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

    



module.exports = StudentController;