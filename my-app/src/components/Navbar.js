import React from 'react';
// import { Link } from "react-router-dom"

function Navbar() {
  const path = window.location.pathname
  return (
    <nav>
      <ul>
          <button className="buttonNav">
            <li> 
              <a href="/">About Me </a>
            </li>
          </button>
          {/* <button className="buttonNav">
            <li> Portfolio </li>
          </button>
          <button className="buttonNav">
            <li> Contact </li>
          </button>
          <button className="buttonNav">
            <li> Resume </li>
          </button> */}
        </ul>
    </nav>
  )
}
function CustomLink ({ href, children, ...props }) {
  return (
    <li>
      <a href={href} {...props} >
        {children}
      </a>
    </li>
  )
}
export default Navbar