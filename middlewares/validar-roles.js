
const { response } = require("express");

const tieneRole = (...roles) => {


    return (req, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se quiere verificar el rol sin validar el token primero'
            })
        }

        if (!roles.includes(req.usuario.rol)) {
            const rolesStr = roles.join(', ');
            return res.status(401).json({
                msg: `EL SERVICIO REQUIERE UNO DE ESTOS ROLES: ${rolesStr}`
            })
        }
        next();
    }
}

module.exports = {
  
    tieneRole
}