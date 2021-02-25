import 'reflect-metadata'
import './database/connection'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

app.listen(3333, () => console.log('Server is running! 🚀'))
