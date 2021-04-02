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
// @description Get all patients
// @access Public
// router.get('/patients', (req, res) => {
//   Patient.find()
//     .then(patients => res.json(patients))
//     .catch(err =>
//       res.status(404).json({ noPatientsFound: 'No Patients found' })
//     )
// })

// @route GET api/books/:id
// @description Get single book by id
// @access Public
// router.get('/:id', (req, res) => {
//   Book.findById(req.params.id)
//     .then(book => res.json(book))
//     .catch(err => res.status(404).json({ nobookfound: 'No Book found' }))
// })

// @route GET api/books
// @description add/save book
// @access Public
router.post('/patients', (req, res) => {
  console.log(req.body)
  Patient.create(req.body)
    .then(patient => res.json({ msg: 'Patient Details added successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to add patient details' })
    )
})

// @route GET api/books/:id
// @description Update book
// @access Public
// router.put('/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body)
//     .then(book => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     )
// })

// @route GET api/books/:id
// @description Delete book by id
// @access Public
// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such a book' }))
// })

module.exports = router
