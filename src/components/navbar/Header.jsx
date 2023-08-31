import React, { useEffect, useState } from 'react'

import './style1.css';
import RegisTest from './RegisTest';

const Header = ({paket, tipe_paket}) => {
  
  const menu = [
    {id: 1,title: 'Home', href: '#header'},
    {id: 2,title: 'Pricing', href: '#pricing'},
    {id: 3,title: 'Why', href: '#why-us'},
    // {id: 4,title: 'Contact', href: '#'},
  ];
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 90 ? setStickyClass('bg-dark') : setStickyClass('bg-transparent');
    }
  };

  return (
    <>
    <section id='header'>
      <div id="header">
        <nav className={`navbar navbar-expand-sm fixed-top sticky-nav ${stickyClass}`}>
          <div className="container">
              <a className="navbar-brand text-white" href="#">NIEC Student Hub & <br />Co-Working Space <br /> Yogyakarta</a>
              <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarExample-expand-sm" aria-controls="offcanvasNavbarExample-expand-sm">
                  <span className="navbar-toggler-icon" data-bs-target="#offcanvasNavbarExample-expand-sm"></span>
              </button>
              <div className="offcanvas offcanvas-end" data-bs-hideresize="true" tabIndex="-1" id="offcanvasNavbarExample-expand-sm" aria-labelledby="offcanvasNavbarExample-expand-smLabel" aria-hidden="true">
                  <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasLabel">NIEC Student Hub & <br />Co-Working Space <br /> Yogyakarta</h5>
                      <button type="button" className="btn-close shadow-none text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end ms-auto flex-grow-1 pe-3">
                        {
                          menu.map((m) => {
                            return (
                              <li className="nav-item" key={m.id}>
                                <a className="nav-link" href={m.href}>{m.title}</a>
                            </li>
                            )
                          })
                        }
                      </ul>
                  </div>
              </div>
          </div>
        </nav>
          <div className="container">
            <div className="banner-text-form d-flex align-items-center">
              <div className="row">
                <div className="col-lg-10 col-md-6 col-sm-6 align-self-center text-white">
                  <h1 className='banner-title'>Tingkatkan Efisiensi <br />dan Fokus Kerja Anda</h1>
                  <p className='banner-paragraph'>Maksimalkan potensi kerjamu dengan ruang kerja <br /> yang super produktif, Pesan Sekarang!</p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="box-form card">
                    <h3 className='mb-3 text-center'>Pesan Sekarang</h3>
                    <RegisTest selectedPaket={paket} tipe_paket={tipe_paket}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>              
    </>
      )
}

export default Header