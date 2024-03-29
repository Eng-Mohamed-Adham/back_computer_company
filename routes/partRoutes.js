const express = require('express')
const router = express.Router()
const partsController = require('../controllers/partsController') 
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(partsController.getAllParts)
    .post(partsController.createNewPart)
    .patch(partsController.updatePart)
    .delete(partsController.deletePart)

module.exports = router