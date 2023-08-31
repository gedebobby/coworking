import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './checkinStyle.css'

function CheckIn() {
    // const [intialValue, setInitialValue] = useState([])
    const [codeBooking, setCodeBooking] = useState([])    
    const key = '10936e153cc73190ef8b276661e85b8049f7bff74ed45b3908c4e467c6793e4b2539abc73f0e4fd3c145f327ecc1bbe0300ba10d16386b151c2c9fb271bdee8b';

    const handleInput = (e) => {
        const {name, value} = e.target
        setCodeBooking({...codeBooking,[name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(codeBooking);
        axios({
            method: 'POST',
            url: 'http://103.41.205.87/coworking/checkin-registration',
            data: codeBooking,
            headers: {
                Authorization: `Bearer ${key}`
            }
        })
        .then( (res) => {
            console.log(res.data);
                Swal.fire({
                    icon: res.data.status,
                    title: res.data.msg,
                    timer: 6000,
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