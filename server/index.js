const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRoute = require("./routes/auth.route")
const todoRoute = require("./routes/todo.route")
const app = express()
const PORT = config.get("PORT")

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/todo", todoRoute)

const start = async () => {
    try{
        await mongoose.connect(config.get("dbURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server start at PORT ${PORT}`)
        })
    }catch(e){
        console.log(e)
    }

}


start()