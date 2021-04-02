const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  FormDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  FormTime: {
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
