
const mongoose=require("mongoose")
require("dotenv").config()
//mongoose.set('strictQuery', false)
//take

const connection=mongoose.connect(process.env.mongoUrl)

module.exports={
    connection
}
