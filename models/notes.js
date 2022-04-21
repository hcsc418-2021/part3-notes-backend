const mongoose = require('mongoose')
require('dotenv').config()

const password = process.env.MONGO_PASSWORD || "fakepasswd"
/*
  let password = ""
  if (process.env.MONGO_PASSWORD) {
    password = process.env.MONGO_PASSWORD
  }
*/
const url =
  `mongodb+srv://apiuser418s22:${password}@cluster0.cbuan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', noteSchema)