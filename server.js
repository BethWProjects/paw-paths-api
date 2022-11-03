//require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')
app.set('port', process.env.PORT || 8080)

//middleware
app.use(cors())
// app.use(express.json());
app.get('/api/v1/pathData', async(request, response) => {
    console.log(request.body)
    const pathData = await knex.select().from('pathData')
    response.status(200).json(pathData)
})
//routes
app.listen(app.get('port'), () => {
  console.log(`server has started on http://localhost:${app.get('port')}.`)
})