import React from 'react'
import {Link} from 'react-router-dom';
import './errorpage.styles.scss'

const Homepage = () => {
  return (
    <section className="homepage section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">Back home</Link>
      </div>
    </section>
  )
}
export default Homepage
