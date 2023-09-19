
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/navbar/Header';
import WhyUs from './components/navbar/WhyUs';
import Footer from './components/navbar/Footer';
import Pricing from './components/navbar/Pricing';
import Gallery from './components/navbar/Gallery';
import Mailbox from './components/navbar/Mailbox';
import API from './components/navbar/API_URL';

function App() {

  const [tipe_paket, setTipePaket] = useState('')
  const [paket, setPaket] = useState('')
  const key = '10936e153cc73190ef8b276661e85b8049f7bff74ed45b3908c4e467c6793e4b2539abc73f0e4fd3c145f327ecc1bbe0300ba10d16386b151c2c9fb271bdee8b';
    

  useEffect(() => {
    getTipePaket();
  }, [])

  const handleSelect = (id) => {
    setPaket(id)
    window.scrollTo(0, 0)
  }

  const getTipePaket = () => {
    axios.get(API.api + 'booking-plan', { 'headers': { Authorization: `Bearer ${key}` } })
    .then(data => setTipePaket(data.data))
    .catch(err => console.log(err))
  }
  return (
    <>
    <Header paket={paket} tipe_paket={tipe_paket} />
    <Pricing handleSelect={handleSelect} tipe_paket={tipe_paket}/>
    <Mailbox handleSelect={handleSelect} tipe_paket={tipe_paket}/>
    <Gallery/>
    <WhyUs/>
    <Footer/>
    </>
  );
}

export default App;
