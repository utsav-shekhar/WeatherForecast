const express = require('express')
const router = express.Router()
const fetch = require('isomorphic-fetch')

const API_KEY = '8e635393a89817f73d31386490b55f8c'

router.post('/report', async (req, res) => {
  try {
    const { city, country } = req.body
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const weatherJson = await weatherData.json()
    res.json(weatherJson)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
