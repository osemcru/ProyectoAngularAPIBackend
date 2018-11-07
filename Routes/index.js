let express = require('express');
let StudentController = require('../controllers/StudentController');
let UserController = require('../controllers/UserController');
let router = express.Router();

router.get('/students', StudentController.show);
router.post('/students', StudentController.store);
router.get('/students/:id',StudentController.find);
router.put('/students/:id',StudentController.update);
router.delete('/students/:id',StudentController.destroy);

router.post('/users', UserController.store);
router.get('/users/:id',UserController.find);

module.exports = router;