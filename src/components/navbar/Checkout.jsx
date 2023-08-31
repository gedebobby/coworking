import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import './checkoutStyle.css'


const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // const [diffDay, setDiffDay] = useState('')
  const [loading, setLoading] = useState(false)
  const [snapToken, setSnapToken] = useState('')
  const key = '10936e153cc73190ef8b276661e85b8049f7bff74ed45b3908c4e467c6793e4b2539abc73f0e4fd3c145f327ecc1bbe0300ba10d16386b151c2c9fb271bdee8b';

  const date1 = new Date(location?.state?.start_date);
  const date2 = new Date(location?.state?.end_date);
  const data = {
    nama_penyewa: location?.state?.nama_penyewa,
    // nama_perusahaan: location?.state.nama_perusahaan,
    email: location?.state?.email,
    telepon: location?.state?.telepon,
    start_date: location?.state?.start_date,
    end_date: location?.state?.end_date,
    id_jenis_ruangan: location?.state?.id_jenis_ruangan,
    lama_bulan: location?.state?.lama_bulan,
  }
  
  const handleSubmitCheckout = () => {

    if (snapToken === '') {
      axios({
        method: 'POST',
        url: 'http://103.41.205.87/coworking/booking',
        data: data,
        headers: {
            Authorization: `Bearer ${key}`
        }
    })
      .then((res) => {
          setSnapToken(res.data.snap_token)
          window.snap.pay(res.data.snap_token,{
              onSuccess: function(result){
                Swal.fire({
                  icon: 'success',
                  title: 'Terima Kasih Sudah Memesan',
                  text: 'Pembayaran Sewa Office NIEC Student Hub & Co-Working Space Yogyakarta Berhasil! Silahkan Cek Email Anda',
                  confirmButtonText: 'Ok'
                }).then((result)=>{
                  if (result.isConfirmed) {
                    navigate('/')
                  }
                })
              },
              onPending: function(result){
                alert("wating your payment!"); console.log(result);
              },
              onError: function(result){
                alert("payment failed!"); console.log(result);
              }
          });
      })
      .catch(err => {
          console.log(err);
      })      
    } else {
          window.snap.pay(snapToken,{
            onSuccess: function(result){
              Swal.fire({
                icon: 'success',
                title: 'Terima Kasih Sudah Memesan',
                text: 'Pembayaran Sewa Office NIEC Student Hub & Co-Working Space Yogyakarta Berhasil! Silahkan Cek Email Anda',
                confirmButtonText: 'Ok'
              }).then((result)=>{
                if (result.isConfirmed) {
                  navigate('/')
                }
              })
            },
            onPending: function(result){
              alert("wating your payment!"); console.log(result);
            },
            onError: function(result){
              alert("payment failed!"); console.log(result);
            }
          });
    }
  }

  const handleSubmitVisitor = () => {
    data.tipe_paket = location?.state?.tipe_paket
    console.log(data);
    setLoading(true)
    axios({
      method: 'POST',
      url: 'http://103.41.205.87/coworking/booking',
      data: data,
      headers: {
          Authorization: `Bearer ${key}`
      }
  })
    .then(res => {
      setLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'Terima Kasih Sudah Registrasi',
        text: 'Registrasi Visitor Office NIEC Student Hub & Co-Working Space Yogyakarta Silahkan Cek Email Anda',
        confirmButtonText: 'Ok'
      }).then((result)=>{
        if (result.isConfirmed) {
          navigate('/')
        }
      })
    })
    .catch(err => console.log('err', err))
  }

  useEffect(()=>{
    // let Difference_In_Time = date2.getTime() - date1.getTime();
    // let dayDiff = Difference_In_Time / (3600 *1000 * 24);
    // setDiffDay(dayDiff)  
  }, [])
    
  return (
    <>
    {location.key == 'default' ? navigate('/') : ''}
    <div id="checkout">
      <div className="container">
        <div className="detail-booking card">
          <a className=" navbar-brand" href="#">NIEC Student Hub &  <br /> Co-Working Space <br />Yogyakarta</a>
          <p className='address'></p>
          <h2 className='title'>DETAIL BOOKING</h2>
          <table className='profile'>
            <tr>
              <td width={50}>Nama</td>
              <td width={10}>:</td>
              <td>{data.nama_penyewa}</td>
            </tr>
            <tr>
              <td width={50}>Email</td>
              <td width={10}>:</td>
              <td>{data.email}</td>
            </tr>
          </table>
          <div class="table-responsive-sm">
            <table class="table detail-book">
            <thead>
              <tr>
                <th scope="col">Booking Plan</th>
                <th scope="col">Durasi</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className='detail-order-booking'>
                <td>{location?.state?.booking_plan}</td>
                <td>{location?.state?.deskripsi} </td>
                <td>Rp. {location?.state?.harga}</td>
                <td>Rp. {location?.state?.total_harga}</td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td>Total</td>
                <td>Rp. {location?.state?.total_harga}</td>
            </tr>
            </tbody>
            </table>
          </div>
          {
           location?.state?.tipe_paket === '1' ? (<button onClick={handleSubmitVisitor} disabled={loading} className='btn btn-success btn-pay'>Registrasi</button>) : 
           (<button onClick={handleSubmitCheckout} className='btn btn-success btn-pay'>Bayar</button>) 
          }
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout