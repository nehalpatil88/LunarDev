import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
    <img src="./images/logo.png" width="80" height="60" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto" >
      <li className="nav-item active">
        <a className="nav-link" href="/Home">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/About">About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/Services">Services</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link disabled" href="/contact">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
