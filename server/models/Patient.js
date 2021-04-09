const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  formDate: {
    type: String,
    required: true
  },
  formTime: {
    type: String,
    required: true
  },
  secDiag: {
    type: String
  },
  ambuAid: {
    type: String
  },
  heparinLock: {
    type: String
  },
  mentalStatus: {
    type: String
  },
  medicatnCondition: {
    type: String
  },
  physicalRestraint: {
    type: String
  },
  fluidRestraint: {
    type: String
  }
})

module.exports = Patient = mongoose.model('patient', PatientSchema)
