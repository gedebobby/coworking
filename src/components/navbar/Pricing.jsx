import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import {Button} from '@mui/material'

const Pricing = ({tipe_paket, handleSelect}) => {


  return (
    <section id='pricing'>
      <div className="container">
        <div className="pricing">
        <div className="pricing-header text-center">
          <h1 className="pricing-title">Temukan Ruang Kerja yang Ideal untuk Anda.</h1>
          <p className="pricing-paragraph text-wrap">
            Temukan ruang kerja ideal untuk pertumbuhan bisnis Anda. Kantor kami dilengkapi dengan fasilitas modern, teknologi kelas bisnis, serta semua infrastruktur layanan umum dan layanan kantor, Anda bisa langsung masuk atau mengatur tata letak ruang terlebih dahulu.
          </p>
        </div>
        <div className="pricing-main">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pricing-box">
                {/* -------- */}
                <div className="pricing-box-header">
                  <h3>{tipe_paket[0]?.jenis_ruangan}</h3>
                  <p>Office Tour</p>
                  <div className="pricing-price d-flex">
                    <span className='currency '>Rp</span>
                    <span className='price'>{tipe_paket[0]?.harga.toLocaleString()}</span>
                    <span className='time align align-self-end'>/day</span>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-facility">
                  <div className="header">
                    <h5>Include</h5>
                    <p>Everything you get in this plan</p>
                  </div>
                  <div className="plan">
                    <ul>
                      <li><CheckIcon className='icon-check'></CheckIcon>WIFI</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>Ruangan ber-AC</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>1 Share Desk</li>
                    </ul>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-footer text-center">
                <Button onClick={() => handleSelect('1')} variant="contained" className='btn-order-pricing'>Pesan Sekarang</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pricing-box">
                {/* -------- */}
                <div className="pricing-box-header">
                  <h3>{tipe_paket[1]?.jenis_ruangan}</h3>
                  <p>Bebas Sewa Harian</p>
                  <div className="pricing-price d-flex">
                    <span className='currency '>Rp</span>
                    <span className='price'>{tipe_paket[1]?.harga.toLocaleString()}</span>
                    <span className='time align align-self-end'>/day</span>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-facility">
                  <div className="header">
                    <h5>Include</h5>
                    <p>Everything you get in this plan</p>
                  </div>
                  <div className="plan">
                    <ul>
                      <li><CheckIcon className='icon-check'></CheckIcon>WIFI</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>Ruangan ber-AC</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>1 Share Desk</li>
                    </ul>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-footer text-center">
                <Button onClick={() => handleSelect('2')} variant="contained" className='btn-order-pricing'>Pesan Sekarang</Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="pricing-box">
                {/* -------- */}
                <div className="pricing-box-header">
                  <h3>{tipe_paket[2]?.jenis_ruangan}</h3>
                  <p>Bebas Sewa Bulanan</p>
                  <div className="pricing-price d-flex">
                    <span className='currency '>Rp</span>
                    <span className='price'>{tipe_paket[2]?.harga.toLocaleString()}</span>
                    <span className='time align align-self-end'>/month</span>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-facility">
                  <div className="header">
                    <h5>Include</h5>
                    <p>Everything you get in this plan</p>
                  </div>
                  <div className="plan">
                    <ul>
                      <li><CheckIcon className='icon-check'></CheckIcon>WIFI</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>Ruangan ber-AC</li>
                      <li><CheckIcon className='icon-check'></CheckIcon>1 Share Desk</li>
                    </ul>
                  </div>
                </div>
                {/* -------- */}
                <div className="pricing-footer text-center">
                <Button onClick={() => handleSelect('3')} variant="contained" className='btn-order-pricing'>Pesan Sekarang</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing