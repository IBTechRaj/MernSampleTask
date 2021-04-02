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
  // const textInput = useRef()
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
    Axios.post('http://localhost:8082/api/patients', {
      formDate: entryDate,
      formTime: entryTime,
      secDiag: secDiag,
      ambuAid: ambuAid,
      heparinLock: heparinLock,
      mentalStatus: mentalStatus,
      medicatnCondition: medicatnCondition,
      physicalRestraint: physicalRestraint,
      fluidRestraint: fluidRestraint
    })

      .then(() => {
        getEmployees()
      })
      // .then(() => {
      //   setPatientDetails([
      //     ...patientDetails,
      //     {
      //       formDate: entryDate,
      //       formTime: entryTime,
      //       secDiag: secDiag,
      //       ambuAid: ambuAid,
      //       heparinLock: heparinLock,
      //       mentalStatus: mentalStatus,
      //       medicatnCondition: medicatnCondition,
      //       physicalRestraint: physicalRestraint,
      //       fluidRestraint: fluidRestraint
      //     }
      //   ])
      // })
      .catch(err => {
        console.log(err)
        console.log('Error in Create Details!')
      })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:8082/api/patients').then(response => {
      setPatientDetails(response.data)
    })
  }

  // const clearPatient = () => {
  //   textInput.current.value = ''
  // }
  const clearPatient = () => {
    // setFormDate('')
    // setFormTime('')
    setSecDiag('')
    setAmbuAid('')
    setHeparinLock('')
    setMentalStatus('')
    setMedicatnCondition('')
    setPhysicalRestraint('')
    setFluidRestraint('')
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
        {/* <form id='patient-form' onSubmit={addPatient}> */}
        <div className='information'>
          <div className='form-control'>
            <label>Date {entryDate}</label>
          </div>
          <div className='form-control'>
            <label>Time {entryTime}</label>
          </div>
          <label>Secondary Diagnosis:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setSecDiag(event.target.value)
            }}
          >
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>
          <label>Ambulatory Aid:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setAmbuAid(event.target.value)
            }}
          >
            {AmbulatoryAid.map(ambaid => (
              <option key={ambaid} value={ambaid}>
                {ambaid}
              </option>
            ))}
          </select>
          <label>Heparin Lock:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setHeparinLock(event.target.value)
            }}
          >
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>

          <label>Mental Status:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setMentalStatus(event.target.value)
            }}
          >
            {MentalStatus.map(ment => (
              <option key={ment} value={ment}>
                {ment}
              </option>
            ))}
          </select>
          <label>Medication Condition:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setMedicatnCondition(event.target.value)
            }}
          >
            {Medication.map(medic => (
              <option key={medic} value={medic}>
                {medic}
              </option>
            ))}
          </select>
          <label>Physical Restraint:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setPhysicalRestraint(event.target.value)
            }}
          >
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>

          <label>Fluid Restraint:</label>
          <select
            type='string'
            // ref={textInput}
            onChange={event => {
              setFluidRestraint(event.target.value)
            }}
          >
            {YesNo.map(yesno => (
              <option key={yesno} value={yesno}>
                {yesno}
              </option>
            ))}
          </select>
          <button onClick={addPatient}>Save</button>
          {/* <button type='submit'>Save</button> */}
          <button onClick={clearPatient}>Reset</button>
        </div>
        {/* </form> */}
      </div>
      <div className='patients'>
        {/* <button onClick={clearPatient}>Reset</button> */}

        {patientDetails.map((val, key) => {
          return (
            <div className='employee'>
              <div>
                <h3>formDate: {val.entryDate}</h3>
                <h3>formTime: {val.entryTime}</h3>
                <h3>secDiag: {val.secDiag}</h3>
                <h3>ambuAid: {val.ambuAid}</h3>
                <h3>heparinLock: {val.heparinLock}</h3>
                <h3>mentalStatus: {val.mentalStatus}</h3>
                <h3>medicatnCondition: {val.medicatnCondition}</h3>
                <h3>physicalRestraint: {val.physicalRestraint}</h3>
                <h3>fluidRestraint: {val.fluidRestraint}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
