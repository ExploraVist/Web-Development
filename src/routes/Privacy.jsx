import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Privacy.css'

const Privacy = () => {
  return (
    <Fragment>
        <Navbar/>
        <main id="main-content" tabIndex="-1">
          <section className='privacy'>
            <section className='privacy_hero'>
              <p className='privacy_header'>Privacy Policy</p>
              <h2 className='privacy_title'>Coming soon.</h2>
              <p className='privacy_paragraph'>Our privacy policy is on its way. Please check back soon.</p>

              {/* TODO: Privacy policy content goes here. */}

            </section>
          </section>
          <br/>
          <br/>
          <br/>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default Privacy
