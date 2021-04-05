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

const SecondScore = [15, 0]
const AmbuScore = [30, 15, 15, 15, 0, 0, 0, 0]
const HepaScore = [20, 0]
const MentalScore = [15, 0]
const MedicatnScore = [20, 0]
const PhysScore = [10, 0]
const FluidScore = [10, 0]

function App() {
  const today = new Date()
  const entryTime =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  const entryDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  console.log('dt', entryTime, entryDate)
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
      .catch(err => {
        console.log(err)
        console.log('Error in Create Details!')
      })
  }

  const getEmployees = () => {
    Axios.get('http://localhost:8082/api/patients')
      .then(response => {
        console.log(response.data)
        setPatientDetails(response.data)
      })
      .catch(err => {
        console.log(err)
        console.log('Error in Display Details!')
      })
  }

  const clearPatient = () => {
    setSecDiag('')
    setAmbuAid('')
    setHeparinLock('')
    setMentalStatus('')
    setMedicatnCondition('')
    setPhysicalRestraint('')
    setFluidRestraint('')
  }

  return (
    <div className='container my-5'>
      <div className='row col-md-12 my-5'>
        <div className='col-md-3'></div>
        <div className='col-md-9'>
          <h5>
            1.1 IP-MORSE FALL ASSESSMENT : The system shall allow the SN to
            input
          </h5>
          <h5>Morse Fall Risk Assessment Data</h5>
          <h5> i. Date</h5>
          <h5> ii. Time</h5>{' '}
          <h5>iii. History of Falls( Yes / No) Yes =25, No=0</h5>
          <h5> iv. Secondary Diagnosis (Yes / No) Yes=15. No = 0 </h5>
          <h5>
            v. Ambulatory Aid ( Furniture / Crutches /Walker / Cane / None / Bed
            Rest/ wheel chair/ Nurse) Furniture = 30, Crutches/walker/cane = 15,
            others =0
          </h5>
          <h5>vi. Heparin Lock ( Yes /No) Yes =20, No =0</h5>
          <h5>
            {' '}
            vii. Gait / Transferring (Impaired / Weak / Normal / Bed Rest /
            Immobile) Impaired = 20, weak=10, others =0
          </h5>{' '}
          <h5>
            {' '}
            viii. Mental Status ( Forgets Limitations / Oriented to Own ability)
            Forgets = 15, own =0
          </h5>{' '}
          <h5>
            {' '}
            ix. Medication / Other condition ( Under sedation or Anesthesia /
            None ) Sedation =20 , None = 0
          </h5>{' '}
          <h5> x. Physical Restraint ( Yes / No ) Yes =10/ No=0</h5>
          <h5> xi. Fluid Restrictions ( Yes / No) Yes=10, No=0</h5>
          <h5>
            {' '}
            Based on the response, the score should be calculated and displayed
            in reports; Alert if the score is 45 or above
          </h5>
        </div>
      </div>
      <div
        className='row my-3'
        style={{
          height: '2 rem',
          backgroundColor: 'red',
          fontWeight: 'bold',
          color: 'white',
          justifyContent: 'center'
        }}
      >
        {' '}
        P.Id: 21CR-0123 NAVEEN YADAV IP -Bed #21
      </div>
      <div className='row mx-n5'>
        <div
          className=' col-md-2  text-center text-uppercase'
          style={{
            height: '1 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          clinical condition
        </div>
        <div
          className=' col-md-2 px-3  text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          drug administration
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase '
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          clinical investigation
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          pain assessment
        </div>
        <div
          className=' col-md-2 px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          m.morse fall risk
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          braden ulcer risk
        </div>
        {/* </div> */}
      </div>

      <div className='row mx-n5 py-2'>
        <div
          className=' col-md-2  text-center text-uppercase'
          style={{
            height: '1 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          nursing checklist
        </div>
        <div
          className=' col-md-2 px-3  text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          nursing goals
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase '
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          interdisciplinary
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          food & nutrition
        </div>
        <div
          className=' col-md-2 px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          physiotherapy
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          in house pharmac
        </div>
        {/* </div> */}
      </div>

      <div className='row mx-n5'>
        <div
          className=' col-md-2  text-center text-uppercase'
          style={{
            height: '1 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          doctors notes
        </div>
        <div
          className=' col-md-2 px-3  text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          hands off commun
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase '
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          critical condition con
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          patient education
        </div>
        <div
          className=' col-md-2 px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          patient discharge
        </div>
        <div
          className=' col-md-2  px-3 text-center text-uppercase'
          style={{
            height: '2 rem',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 10
          }}
        >
          escalation & alert
        </div>
        {/* </div> */}
      </div>

      <div className='row row-col-12 text-uppercase text-center my-3'>
        <div
          style={{
            height: '2 rem',
            backgroundColor: 'red',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {' '}
          modified morse fall risk assessment
        </div>
      </div>

      <div className='row row-col-12  text-uppercase'>
        <form className='container' id='patient-form'>
          <div className='row my-3'>
            <div className=' col-md-1'>
              <label htmlFor='date'>Date</label>
            </div>
            <div className=' col-md-2'>
              {
                <input
                  className='form-control'
                  id='date'
                  defaultValue={entryDate}
                ></input>
              }
            </div>
            <div className=' col-md-1'>
              <label htmlFor='time'>Time</label>
            </div>
            <div className=' col-md-2'>
              {
                <input
                  className='form-control'
                  id='time'
                  defaultValue={entryTime}
                ></input>
              }
            </div>
          </div>
          <div className='row my-3'>
            <div className=' col-md-2'>
              <label htmlFor='setDiag'>Secondary Diagnosis:</label>
            </div>
            <div className=' col-md-2' style={{ width: '8 rem' }}>
              <select
                type='string'
                id='setDiag'
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
            </div>
            <div className=' col-md-2'>
              <label htmlFor='ambuAid'>Ambulatory Aid:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='ambuAid'
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
            </div>
            <div className=' col-md-2'>
              <label htmlFor='heparinLock'>Heparin Lock:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='heparinLock'
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
            </div>
          </div>
          <div className='row my-3'>
            <div className=' col-md-2'>
              <label htmlFor='mentalStatus'>Mental Status:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='mentalStatus'
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
            </div>
            <div className=' col-md-2'>
              <label htmlFor='medicatnCondition'>Medication Condition:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='medicatnCondition'
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
            </div>
            <div className=' col-md-2'>
              <label htmlFor='physicalRestraint'>Physical Restraint:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='physicalRestraint'
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
            </div>
          </div>
          <div className='row my-3'>
            <div className=' col-md-2'>
              <label htmlFor='fluidRestraint'> Fluid Restraint:</label>
            </div>
            <div className=' col-md-2'>
              <select
                type='string'
                id='fluidRestraint'
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
            </div>
          </div>
          <div className='row' style={{ float: 'right' }}>
            <div className=' col-md-2 '>
              <button
                type='button'
                className='btn btn-success'
                onClick={addPatient}
              >
                Save
              </button>
            </div>
            <div className=' col-md-2 '></div>
            <div className=' col-md-2 '>
              <button
                type='button'
                className='btn btn-warning '
                onClick={clearPatient}
              >
                Reset
              </button>
            </div>

            {/* </div> */}
          </div>
        </form>
      </div>
      <div className='patients'>
        <p
          className='text-center text-uppercase'
          style={{ fontWeight: 'bold' }}
        >
          {' '}
          modified morse fall risk assessment
        </p>

        <div className='row row-col-12 text-uppercase text-center'>
          <div
            style={{
              height: '2 rem',
              backgroundColor: 'lightgrey'
            }}
          >
            {' '}
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              date
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              time
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '20%'
              }}
            >
              secondary diagnosis score
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              ambulatory aid score
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              heparin lock score
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              mental status
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              sedition score
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              phy restraint score
            </div>
            <div
              style={{
                float: 'left',
                borderRight: '1 px solid ',
                width: '10%'
              }}
            >
              fluid restraint score
            </div>
          </div>
        </div>
        {patientDetails.map((val, key) => {
          return (
            <div className='employee'>
              <div className='row row-col-12 text-uppercase text-center'>
                <div
                  style={{
                    height: '2 rem'
                  }}
                >
                  {' '}
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {val.formDate}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {val.formTime}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '20%'
                    }}
                  >
                    {SecondScore[secDiag.indexOf(val.secDiag)]}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {AmbuScore[AmbulatoryAid.indexOf(val.ambuAid)]}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {HepaScore[heparinLock.indexOf(val.heparinLock)]}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {MentalScore[MentalStatus.indexOf(val.mentalStatus)]}
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {
                      MedicatnScore[
                        medicatnCondition.indexOf(val.medicatnCondition)
                      ]
                    }
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {
                      PhysScore[
                        physicalRestraint.indexOf(val.physicalRestraint)
                      ]
                    }
                  </div>
                  <div
                    className=' border border-dark'
                    style={{
                      float: 'left',
                      width: '10%'
                    }}
                  >
                    {FluidScore[fluidRestraint.indexOf(val.fluidRestraint)]}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
