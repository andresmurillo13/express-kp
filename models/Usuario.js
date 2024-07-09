const { Schema, model } = require('mongoose');



const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: ['ESTUDIANTE', 'MODERADOR']
    },
    online: {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);