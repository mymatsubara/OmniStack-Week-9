const express = require('express')
const mongoose = require('mongoose')
const routes =  require('./routes')
const cors =  require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-eam0g.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// GET POST, PUT (modify existing data), DELETE

// req.query: access query parameters (?param=x, in the URL for filter)
// req.params: access route paramenters (/param, in the URL for edition or deletion)
// req.body: access request body (for edition and creation)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)