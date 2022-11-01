// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')
app.set('port', 8080)

//middleware
app.use(cors())
// app.use(express.json());
app.get('/api/v1/pathData', async(request, response) => {
    const pathData = await knex.select().from('pathData')
    response.status(200).json(pathData)
})
//routes
app.listen(8080, () => {
  console.log('server has started on port 8080')
})