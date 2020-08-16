const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const slowDown = require('express-slow-down')
const API = require('./api/')
const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500 // limit each IP to 100 requests per windowMs
})

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 100, // allow 100 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 100
})

/**
 * Config
 */

app.set('trust proxy')
app.use(limiter)
app.use(speedLimiter)
app.use(helmet())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))

/**
 * API
 */

app.get('/', (req, res) => res.send('Katana API'))

app.use('/api', API)

// 404 not found
app.use((req, res, next) => {
  res.status(404).send()
})

// Error handling
app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status)
  } else {
    res.status(500)
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '' : error.stack
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
