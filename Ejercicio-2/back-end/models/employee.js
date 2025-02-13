const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    cargo: {
        type: String,
        require: true
    },
    fecha_ingreso: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('employee', EmployeeSchema)