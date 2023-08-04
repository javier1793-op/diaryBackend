const router = require('express').Router();

const apiNotes = require('./Notes')
const apiPosts = require('./Posts')
const apiUser = require('./User')

//rutas de Notas
router.use('/notes',apiNotes)

//rutas de Post
router.use('/post',apiPosts)

//rutas de Post
router.use('/user',apiUser)

module.exports = router