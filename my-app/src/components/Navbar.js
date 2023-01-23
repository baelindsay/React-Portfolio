import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../assets/Navbar.css";

function Navbar() {
  const path = window.location.pathname
  return (
    <>
    <nav className='nav'>
        <Link to="/" className='site-title'>
          Lindsay Bae Portfolio
        </Link>
        <ul>
            <li>
              <CustomLink to="/aboutme"> About Me </CustomLink>
            </li>
          
      
            <li> 
              <CustomLink to="/portfolio"> Portfolio </CustomLink> 
            </li>
        
    
          <li> 
            <CustomLink to="/contact"> Contact </CustomLink> 
          </li>
        
    
          <li> <CustomLink to="/resume"> Resume </CustomLink> </li>
        </ul>
        </nav>
    </>
  )
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar