import './App.css'
import { useState } from 'react'
import Axios from 'axios'

const YesNo = ['Yes', 'No']
const AmbulatoryAid = [
  'Furniture',
  'Crutches',
  'Walker',
  'Cane',
  'None',
  'Bed Rest',
  'Wheel Chair',
  'Nurse'
]
const MentalStatus = ['Forgets Limitations', 'Oriented to Own Ability']
const Medication = ['Under Sedation/Anesthasia', 'None']

function App() {
  const today = new Date()
  const entryTime =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  const entryDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  console.log('dt', entryTime, entryDate)
  // const [currentDate, setCurrentDate] = useState(entryDate)
  // const [currentTime, setCurrentTime] = useState(entryTime)
  const [secDiag, setSecDiag] = useState(0)
  const [ambuAid, setAmbuAid] = useState('')
  const [heparinLock, setHeparinLock] = useState(0)
  const [mentalStatus, setMentalStatus] = useState('')
  const [medicatnCondition, setMedicatnCondition] = useState('')

  const [physicalRestraint, setPhysicalRestraint] = useState(0)

  const [fluidRestraint, setFluidRestraint] = useState(0)
  const [patientDetails, setPatientDetails] = useState([])

  const addPatient = () => {
    Axios.post('http://localhost:3001/create', {
      formDate: entryDate,
      formTime: entryTime,
      secDiag: secDiag,
      ambuAid: ambuAid,
      heparinLock: heparinLock,
      medicatnCondition: medicatnCondition,
      mentalStatus: mentalStatus,
      physicalRestraint: physicalRestraint,
      fluidRestraint: fluidRestraint
    }).then(() => {
      setPatientDetails([
        ...patientDetails,
        {
          formDate: entryDate,
          formTime: entryTime,
          secDiag: secDiag,
          ambuAid: ambuAid,
          heparinLock: heparinLock,
          medicatnCondition: medicatnCondition,
          mentalStatus: mentalStatus,
          physicalRestraint: physicalRestraint,
          fluidRestraint: fluidRestraint
        }
      ])
    })
  }
  // const clearPatient = () => {}
  // const getPatientDetails = () => {
  //     Axios.get('http://localhost:3001/patients').then(response => {
  //   setPatientDetails(response.data)
  //     })
  // }

  return (
    <div className='App'>
      <div className='row row-col-12 p-5 m-5'>
        <div className='information'>
          <label>Date {entryDate}</label>

          <label>Time {entryTime}</label>

          <label>Secondary Diagnosis:</label>
          <select
            type='string'
            onChange={event => {
              setSecDiag(event.target.value)
            }}
          >
            <option></option>
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>
          <label>Ambulatory Aid:</label>
          <select
            type='string'
            onChange={event => {
              setAmbuAid(event.target.value)
            }}
          >
            {AmbulatoryAid.map(ambaid => (
              <option key={AmbulatoryAid} value={AmbulatoryAid}>
                {ambaid}
              </option>
            ))}
          </select>
          <label>Heparin Lock:</label>
          <select
            type='string'
            onChange={event => {
              setHeparinLock(event.target.value)
            }}
          >
            <option></option>
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>

          <label>Mental Status:</label>
          <select
            type='string'
            onChange={event => {
              setMentalStatus(event.target.value)
            }}
          >
            <option></option>
            {MentalStatus.map(ment => (
              <option key={ment} value={ment}>
                {ment}
              </option>
            ))}
          </select>
          <label>Medication Condition:</label>
          <select
            type='string'
            onChange={event => {
              setMedicatnCondition(event.target.value)
            }}
          >
            <option></option>
            {Medication.map(medic => (
              <option key={medic} value={medic}>
                {medic}
              </option>
            ))}
          </select>
          <label>Physical Restraint:</label>
          <select
            name='physicalRestraint'
            onChange={event => {
              setPhysicalRestraint(event.target.value)
            }}
          >
            <option></option>
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>
          {/* <input
          type='number'
          onChange={event => {
            setPhysicalRestraint(event.target.value)
          }}
        /> */}
          <label>Fluid Restraint:</label>
          <select
            type='string'
            onChange={event => {
              setFluidRestraint(event.target.value)
            }}
          >
            <option></option>
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>
          <button onClick={addPatient}>Save</button>
        </div>
      </div>
      <div className='patients'>
        {/* <button onClick={clearPatient}>Reset</button> */}

        {/* {patientDetails.map((val, key) => {
          return (
            <div className='employee'>
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

export default App
