import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './checkinStyle.css'

function CheckIn() {
    const [intialValue, setInitialValue] = useState([])
    const [codeBooking, setCodeBooking] = useState([])

    const handleInput = (e) => {
        const {name, value} = e.target
        setCodeBooking({...codeBooking,[name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(codeBooking);
        axios.post('http://103.41.205.87:2223/api/checkin-registration', codeBooking)
        .then( (res) => {
            console.log(res.data);
                Swal.fire({
                    icon: res.data.status,
                    title: res.data.msg,
                    timer: 5000,
                    // showConfirmButton: false
                  })    
        }
        ).then(
            setCodeBooking({...codeBooking, code_booking: ''})
        )
    }

  return (
    <div className="checkin-body">
        <div className="input-box">
            <h3>SCAN REGISTRATION</h3>
            <form onSubmit={handleSubmit}>
            <input type="text" name='code_booking' value={codeBooking?.code_booking || ''} autoFocus className='form-control mt-3' onChange={handleInput} placeholder='SCAN BARCODE' />
            {/* <button type='submit' className='btn btn-success btn-lg'>Check</button> */}
            </form>
        </div>
    </div>
  )
}

export default CheckIn