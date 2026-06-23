import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PrivacyContent from '../components/privacy/PrivacyContent'

const Privacy = () => {
  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <PrivacyContent />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Privacy
