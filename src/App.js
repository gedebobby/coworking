
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/navbar/Header';
import WhyUs from './components/navbar/WhyUs';
import Footer from './components/navbar/Footer';
import Pricing from './components/navbar/Pricing';
import Gallery from './components/navbar/Gallery';

function App() {

  const [tipe_paket, setTipePaket] = useState('')
  const [paket, setPaket] = useState('')

  useEffect(() => {
    getTipePaket();
  }, [])

  const handleSelect = (id) => {
    setPaket(id)
    window.scrollTo(0, 0)
  }

  const getTipePaket = () => {
    axios.get('http://103.41.205.87:2223/api/office')
    .then(data => setTipePaket(data.data))
    .catch(err => console.log(err))
  }
  return (
    <>
    <Header paket={paket} tipe_paket={tipe_paket} />
    <Pricing handleSelect={handleSelect} tipe_paket={tipe_paket}/>
    <Gallery/>
    <WhyUs/>
    <Footer/>
    </>
  );
}

export default App;
