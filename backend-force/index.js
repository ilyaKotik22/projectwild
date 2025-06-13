const express = require('express')
const userRouter = require('./router/router.js')
const cors = require('cors');
const PORT = 5000

const app = express()
app.use(cors())

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, ()=>{
    console.log('server is runninsssssssssg')
})