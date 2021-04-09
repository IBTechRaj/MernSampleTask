const express = require('express')
const router = express.Router()

// Load Patient model
const Patient = require('../../models/Patient')

// router.get('/:test', (req, res) => res.send('book route testing!'))
router.get('/', function (req, res) {
  res.json({
    status: 'API working',
    message: 'patient route testing!'
  })
})

// @route GET api/patients
router.get('/patients', (req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err =>
      res.status(404).json({ noPatientsFound: 'No Patients found' })
    )
})

// @route POST api/patients
router.post('/patients', (req, res) => {
  console.log(req.body)
  Patient.create(req.body)
    .then(patient => res.json({ msg: 'Patient Details added successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to add patient details' })
    )
})

module.exports = router
