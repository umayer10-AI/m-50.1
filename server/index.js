const express = require('express');
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// mongodb+srv://server2:nrMfNcMWFj0MTOMv@cluster0.ywso1qs.mongodb.net/?appName=Cluster0

app.get('/', (req,res) => {
    res.send("Umayer Ahmad")
})

app.listen(port, () => {
    console.log(`Port Is Running ${port}`)
})