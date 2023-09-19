import React from 'react'
import {Button} from '@mui/material'
import './style1.css';

const Mailbox = ({handleSelect, tipe_paket}) => {
  return (
    <section id='mailbox'>
        <div className="container">
            <div className="mailbox">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-6">
                        <div className="mailbox-desc">
                            <h1 className='title'>NIEC VIRTUAL OFFICE</h1>
                            <h4 className='paragraph'>NIEC Virtual Office bantu kamu untuk menghemat biaya dengan solusi alamat bisnis untuk perusahaanmu.</h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="mailbox-benefit">
                            <div className="header">
                                <div className="pricing-price d-flex">
                                    <span className='currency '>Rp</span>
                                    <span className='price'>{tipe_paket[3]?.harga.toLocaleString()}</span>
                                    <span className='time align align-self-end'>/month</span>
                                </div>
                            </div>
                            <div className="content">
                                <ul className='benefit mr-0'>
                                    <li>Layanan Mail Handling</li>
                                    <li>Surat Domisili</li>
                                    <li>Free 1x Meeting Room Perbulan</li>
                                </ul>
                            </div>
                            <div className="footer">
                                <Button onClick={() => handleSelect('4')} variant="contained" className='btn-mailbox'>Pesan Sekarang</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mailbox