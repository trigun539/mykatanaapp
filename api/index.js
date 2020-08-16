const { Router } = require('express')
const UsersAPI = require('./user-api')
const SwordsAPI = require('./sword-api')

const router = Router()

router.use('/users', UsersAPI)
router.use('/swords', SwordsAPI)

module.exports = router
