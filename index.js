const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const cors = require('cors');
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME ? process.env.DB_NAME : '',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {require: true, rejectUnauthorized: false}
})

app.use(cors({
    origin: ['http://localhost:3000', 'http://13.51.193.197']
}));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const getStudents = (request, response) => {
  pool.query('select * from students', (error, results) => {
    if (error) {
      console.log(error);
      response.status(500).send(error);
      return;
    }
    response.status(200).json(results.rows);
  })
}

const getGroups = (request, response) => {
  pool.query('select * from groups', (error, results) => {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.status(200).json(results.rows)
  })
}

app.get('/students', getStudents)

app.get('/groups', getGroups)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})