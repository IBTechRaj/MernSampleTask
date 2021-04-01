const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  time: {
    type: DateTime,
    required: true
  },
  SecDiagnosis: {
    type: Boolean,
    required: true
  },
  AmbuAid: {
    type: String
  },
  HeparinLock: {
    type: Boolean
  },
  MentalStatus: {
    type: Integer
  },
  MedicationCondition: {
    type: Integer
  },
  PhysicalRestraint: {
    type: Boolean
  },
  FluidRestraint: {
    type: Boolean
  }
})

module.exports = Patient = mongoose.model('patient', PatientSchema)
