const express = require("express")

const app = express()

app.get("/", (req, res) => { 
    res.send("Hola")
})


// listen at port 8070
app.listen(8070, () => {
    console.log('El server esta funcionando')
})