const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')

router.post('/', employeeController.newEmployee)
router.get('/', employeeController.everyEmployees)
router.get('/:id', employeeController.searchEmployee)
router.delete('/:id', employeeController.deleteEmployee)
router.put('/:id', employeeController.updateEmployee)

module.exports = router