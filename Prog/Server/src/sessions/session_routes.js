const {Router} = require('express');
const controller = require('./session_controller');

const router = Router()
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/isLogged', controller.isLogged);

module.exports = router