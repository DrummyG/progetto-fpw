const {Router} = require('express');
const controller = require('./prodotti_controller');

const router = Router();
//get
router.get('/', controller.getProdottiList);
router.get('/:id', controller.getProdottoById);

//post
router.post('/',controller.addProdotto);

//delete
router.delete('/:id', controller.deleteProdotto);

//update
router.put('/', controller.updateProdotto);

module.exports = router; 
