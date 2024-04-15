var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    estado: {type: String, required: true, max:2},
    celular: {type: String, required: true, max:9}
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
