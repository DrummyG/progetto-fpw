const {Router} = require('express');
const controller = require('./utenti_controller');

const router = Router();
//get
router.get('/', controller.getUserList);
router.get('/:username', controller.getUserById);

//post
router.post('/',controller.addUser);

//delete
router.delete('/:id', controller.deleteUser);

//update
router.put('/', controller.updateUser);

router.put('/', controller.updatePassword);

module.exports = router; 
