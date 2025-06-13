const Router = require('express')
const router = new Router()
const userController = require('../controller/controller.js')


router.get('/items', userController.getItems)
router.post('/putBasket', userController.putInBasket)
router.get('/basket', userController.getBasket)
router.post('/crementBasket', userController.crementBasket)
module.exports = router