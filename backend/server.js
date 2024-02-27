require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const path = require('path')
const seedDatabase = require('./seeds/seedDatabase.js')
const { logger, logEvents } = require('./middlewares/logger.js')

const errorHandler = require('./middlewares/errorHandler.js')


const cookieParser = require('cookie-parser')

const connectDB = require('./dbconnection/dbconnect.js')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3500
app.use(errorHandler);

connectDB()
app.use(logger)

app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/rootRouter.js'))
app.use('/users', require('./routes/userRoutes.js'))
app.use('/auth', require('./routes/authRouter.js'))

app.use('/notes', require('./routes/organisationRoutes.js'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

