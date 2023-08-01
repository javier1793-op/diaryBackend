const router = require('express').Router();

const apiNotes = require('./Notes')
const apiPosts = require('./Posts')

//rutas de Notas
router.use('/notes',apiNotes)

//rutas de Post
router.use('/post',apiPosts)

module.exports = router