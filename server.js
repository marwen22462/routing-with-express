const express = require('express')

const app = express()

let hour = new Date().getHours()
app.get('/', (req, res)=> {
    if(hour < 8 || hour >17) res.sendFile(__dirname + "/public/denied.html")
    else res.sendFile(__dirname + '/public/home.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(5000, (err)=>{
    if(err) console.log('server is not running')
    else console.log('server is runnig on port 5000')
})