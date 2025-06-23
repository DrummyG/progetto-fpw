const {Router} = require('express');
const controller = require('./utenti_controller');

const router = Router();
//get
router.get('/', controller.getUserList);
router.get('/:id', controller.getUserById);

//post
router.post('/',controller.addUser);

//delete
router.delete('/:id', controller.deleteUser);

//update
router.put('/', controller.updateUser);

module.exports = router; 
