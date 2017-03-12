const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.get('/haikus', (req, res) => {
  res.send([
    {body: 'this is not a haiku', id: 0},
    {body: 'neither is this', id: 1},
    {body: '...yet', id: 2},
    {body: 'this is not a haiku', id: 3},
    {body: 'neither is this', id: 4},
    {body: '...yet', id: 5},
    {body: 'this is not a haiku', id: 6},
    {body: 'neither is this', id: 7},
    {body: '...yet', id: 8},
    {body: 'this is not a haiku', id: 9},
    {body: 'neither is this', id: 10},
    {body: '...yet', id: 11},
    {body: 'this is not a haiku', id: 12},
    {body: 'neither is this', id: 13},
    {body: '...yet', id: 14},
  ])
})

app.listen(3000)
