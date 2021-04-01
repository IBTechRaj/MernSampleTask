const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: DateTime,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Book = mongoose.model('book', BookSchema)
