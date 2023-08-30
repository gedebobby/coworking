import React, { Component } from 'react'
import axios from 'axios'
import {Button} from '@mui/material'
import {Navigate, Link} from 'react-router-dom'

export class FormRegistration extends Component {
    constructor(props){
        super(props)
        this.state = {
            office: [],
            nama_penyewa: '',
            nama_perusahaan: '',
            email: '',
            telepon: '',
            start_date: '',
            end_date: '',
            id_jenis_ruangan: '',
            snap_token: '',
            errors: [],
            regis: ''
        }
    }

    componentDidMount(){
        this.getDataOffice();
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nama_penyewa: this.state.nama_penyewa,
            nama_perusahaan: this.state.nama_perusahaan,
            email: this.state.email,
            telepon: this.state.telepon,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            id_jenis_ruangan: this.state.id_jenis_ruangan
        }

        // console.log(data);
        axios.post('http://103.41.205.87:2223/api/book', data)
            // .then(response => response.data)
            .then( (res) => {
                this.setState({regis: res.data.data})
            })
            .catch(err => {
                this.setState({errors:err.response.data.errors})
            })
    }

    getDataOffice(){
        axios.get('http://103.41.205.87:2223/api/office')
        .then(res => this.setState({office: res.data}))
        .catch(err => console.log(err))
    }
  render() {

    return (
        <form action="">
            <input type="text" name='nama_penyewa' className={`form-control ${this.state.errors.nama_penyewa ? 'is-invalid' : ''}`} placeholder='Nama' onChange={this.handleInput} />
            <div className="invalid-feedback mb-2">
                {this.state.errors.nama_penyewa}
            </div>
            <input type="text" name='nama_perusahaan' className={`form-control ${this.state.errors.nama_perusahaan ? 'is-invalid' : ''}`} placeholder='Nama Perusahaan' onChange={this.handleInput} />
            <div className="invalid-feedback mb-2">
                {this.state.errors.nama_perusahaan}
            </div>
            <input type="email" name='email' className={`form-control ${this.state.errors.email ? 'is-invalid' : ''}`} placeholder='Email' onChange={this.handleInput} />
            <div className="invalid-feedback mb-2">
                {this.state.errors.email}
            </div>
            <input type="number" name='telepon' className={`form-control ${this.state.errors.telepon ? 'is-invalid' : ''}`} placeholder='Telepon' onChange={this.handleInput} />
            <div className="invalid-feedback mb-2">
                {this.state.errors.telepon}
            </div>
            <select name='id_jenis_ruangan' className={`form-select mb-2 ${this.state.errors.id_jenis_ruangan ? 'is-invalid' : ''}`} onChange={this.handleInput}>
            <option value="">Pilih Ruangan</option>
            {
                this.state.office?.map((m)=>{
                return (
                    <option key={m.id} value={m.id}>{m.jenis_ruangan}</option>
                )
                })
            }
            </select>
            <div className="invalid-feedback">
                {this.state.errors.id_jenis_ruangan}
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <label htmlFor='date1' className='form-label mb-0'>Start Date</label> 
                <input type="date" name='start_date' id='date1' className={`form-control ${this.state.errors.start_date ? 'is-invalid' : ''}`} onChange={this.handleInput} />
                <div className="invalid-feedback">
                    {this.state.errors.start_date}
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            <label htmlFor='date2' className='form-label mb-0'>End Date</label> 
                <input type="date" name='end_date' id='date2' className={`form-control ${this.state.errors.end_date ? 'is-invalid' : ''}`} onChange={this.handleInput} />
                <div className="invalid-feedback">
                    {this.state.errors.end_date}
                </div>
            </div>
            </div>
            {

            }
            <Button onClick={this.handleSubmit} variant="contained" className='btn-order'>
            Pesan Sekarang
            </Button>
            {/* <Link to="/checkout-page" state={{ data: this.state }} >TEST</Link> */}
        </form>
    )
  }
}

export default FormRegistration