var express = require("express")
const path = require("path")
var router = express.Router()
const PORT = process.env.PORT || 8080
const app = express()
const root = path.join(__dirname, "/build")

app.use(express.static(root))

app.get("*", function(req, res){
    res.sendFile("/index.html", root)
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})