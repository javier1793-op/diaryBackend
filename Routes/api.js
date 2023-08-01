const router = require('express').Router();

const apiNotes = require('./Notes')

//rutas de Notas
router.use('/notes',apiNotes)

//rutas de Post

module.exports = router