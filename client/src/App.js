import './App.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {
  const [secDiag, setSecDiag] = useState(0)
  const [ambuAid, setAmbuAid] = useState('')
  const [heparinLock, setHeparinLock] = useState(0)
  const [mentalStatus, setMentalStatus] = useState('')
  const [medicatnCondition, setMedicatnCondition] = useState('')

  const [physicalRestraint, setPhysicalRestraint] = useState(0)

  const [fluidRestraint, setFluidRestraint] = useState(0)

  const addPatient = () => {
    Axios.post('http://localhost:3001/create', {
      secDiag: secDiag,
      ambuAid: ambuAid,
      heparinLock: heparinLock,
      medicalCondition: medicalCondition,
      mentalStatus: mentalStatus,
      physicalRestraint: physicalRestraint,
      fluidRestraint: fluidRestraint
    }).then(() => {
      setPatientList([
        ...patientList,
        {
          secDiag: secDiag,
          ambuAid: ambuAid,
          heparinLock: heparinLock,
          medicalCondition: medicalCondition,
          mentalStatus: mentalStatus,
          physicalRestraint: physicalRestraint,
          fluidRestraint: fluidRestraint
        }
      ])
    })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then(response => {
      setEmployeeList(response.data)
    })
  }

  return (
    <div className='App'>
      <div className='information'>
        <label>Date:</label>
        <input
          type='text'
          onChange={event => {
            setName(event.target.value)
          }}
        />
        <label>Time:</label>
        <input
          type='number'
          onChange={event => {
            setAge(event.target.value)
          }}
        />
        <label>Secondary Diagnosis:</label>
        <input
          type='text'
          onChange={event => {
            setCountry(event.target.value)
          }}
        />
        <label>Ambulatory Aid:</label>
        <input
          type='text'
          onChange={event => {
            setPosition(event.target.value)
          }}
        />
        <label>Heparin Lock:</label>
        <input
          type='number'
          onChange={event => {
            setWage(event.target.value)
          }}
        />
        <label>Mental Status:</label>
        <input
          type='number'
          onChange={event => {
            setWage(event.target.value)
          }}
        />
        <label>Heparin Lock:</label>
        <input
          type='number'
          onChange={event => {
            setWage(event.target.value)
          }}
        />
        <label>Heparin Lock:</label>
        <input
          type='number'
          onChange={event => {
            setWage(event.target.value)
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className='employees'>
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className='employee'>
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type='text'
                  placeholder='2000...'
                  onChange={event => {
                    setNewWage(event.target.value)
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id)
                  }}
                >
                  {' '}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
