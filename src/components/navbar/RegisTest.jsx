import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


const RegisTest = ({selectedPaket, tipe_paket}) => {

    const navigate = useNavigate()
    const ref = useRef(null);
    const [error, setError] = useState([])
    const [regis, setRegis] = useState([])
    const [paket, setPaket] = useState('')
    const key = '10936e153cc73190ef8b276661e85b8049f7bff74ed45b3908c4e467c6793e4b2539abc73f0e4fd3c145f327ecc1bbe0300ba10d16386b151c2c9fb271bdee8b';
    const months = [1,2,3,4,5,6,7,8,9,10,11,12];

    const handleInput = (e) => {
        const { name, value } = e.target
        setRegis({
            ...regis, [name]: value
        })
    }

    const handleSelect = (e) => {
        setRegis({...regis, start_date: '', end_date: ''})
        const paket_tipe = e.target.value
        setPaket(paket_tipe)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        regis.tipe_paket = paket
        if (paket === '1') {
            regis.start_date = new Date().toJSON().slice(0, 10)
            regis.end_date = new Date().toJSON().slice(0, 10)
        } else if (paket === '3') {
            if (regis.start_date) {
                regis.end_date = moment(regis.start_date).add(regis.lama_bulan, 'month').toJSON().slice(0, 10)
            }
        }

        axios({
            method: 'POST',
            url: 'http://103.41.205.87/coworking/checkout-detail',
            data: regis,
            headers: {
                Authorization: `Bearer ${key}`
            }
        })
        .then(res => {
            console.log(res.data)
            navigate('/checkout-page', {state: res.data});
        })
        // .catch(err => { console.log('err', err.response.data.data)}) 
        .catch(err => {
            setError(err.response.data.data)
        })
    }

    useEffect(()=>{
        ref.current.focus();
        setPaket(selectedPaket)
    }, [selectedPaket])
  return (
    <>
    <form onSubmit={handleSubmit} action="">
            <input type="text" name='nama_penyewa' ref={ref} autoFocus className={`form-control ${error?.nama_penyewa ? 'is-invalid' : ''}`} placeholder='Nama' onChange={handleInput} />
            <div className="invalid-feedback mb-2">
                {error?.nama_penyewa}
            </div>
            {/* <input type="text" name='nama_perusahaan' className={`form-control ${error.nama_perusahaan ? 'is-invalid' : ''}`} placeholder='Nama Perusahaan' onChange={handleInput} />
            <div className="invalid-feedback mb-2">
                {error.nama_perusahaan}
            </div> */}
            <input type="email" name='email' className={`form-control ${error?.email ? 'is-invalid' : ''}`} placeholder='Email' onChange={handleInput} />
            <div className="invalid-feedback mb-2">
                {error?.email}
            </div>
            <input type="number" name='telepon' className={`form-control ${error?.telepon ? 'is-invalid' : ''}`} placeholder='Telepon' onChange={handleInput} />
            <div className="invalid-feedback mb-2">
                {error?.telepon}
            </div>
            <select value={paket} name='tipe_paket' className={`form-select mb-2 ${error?.id_jenis_ruangan ? 'is-invalid' : ''}`} onChange={handleSelect}>
            <option value="">Pilih Paket</option>
            {
                tipe_paket.length ? tipe_paket?.map((m)=>{
                return (
                    <option key={m.id} value={m.id}>{m.jenis_ruangan}</option>
                )
                }) : ''
            }
            </select>
            <div className="invalid-feedback">
                {error?.id_jenis_ruangan}
            </div>
            {
                (paket === '1') ? '' :
                (paket === '2') ? ( <>
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6">
                        <label htmlFor='date1' className='form-label mb-0'>Start Date</label> 
                        <input type="date" name='start_date' id='date1' className={`form-control ${error.start_date ? 'is-invalid' : ''}`} onChange={handleInput} />
                        <div className="invalid-feedback">
                            {error.start_date}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <label htmlFor='date2' className='form-label mb-0'>End Date</label> 
                        <input type="date" name='end_date' id='date2' className={`form-control ${error.end_date ? 'is-invalid' : ''}`} onChange={handleInput} />
                        <div className="invalid-feedback">
                            {error.end_date}
                        </div>
                    </div>
                </div>
                    </>
                ) : (paket === '3') ? (
                    <>
                        <select required name='lama_bulan' className={`form-select mb-2 ${error.id_jenis_ruangan ? 'is-invalid' : ''}`} onChange={handleInput}>
                            <option value="">Pilih Lama Bulan</option>
                            {months.map((m) => (
                                <option value={m}>{m} Bulan</option>
                            ))}
                        </select>
                        <label htmlFor='date1' className='form-label mb-0'>Start Date</label> 
                        <input type="date" name='start_date' id='date1' className={`form-control ${error.start_date ? 'is-invalid' : ''}`} onChange={handleInput} />
                        <div className="invalid-feedback">
                            {error.start_date}
                        </div>
                    </>
                ) : ''
            }
            <Button type='submit' variant="contained" className='btn-order'>
            Pesan Sekarang
            </Button>
    </form>
    </>
  )
}

export default RegisTest