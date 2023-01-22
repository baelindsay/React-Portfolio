import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
  const path = window.location.pathname
  return (
    <>
    <header className="header">
      <h1>Lindsay Bae Portfolio </h1>
    </header>
    <nav className='nav'>
        <Link to="/" className='site-title'>
          Site Name
        </Link>
        <ul>
          <button className="buttonNav">
            <li>
              <CustomLink to="/aboutme"> About Me </CustomLink>
            </li>
          </button>
          <button className="buttonNav">
            <li> 
              <CustomLink to="/portfolio"> Portfolio </CustomLink> 
            </li>
        </button>
        <button className="buttonNav">
          <li> 
            <CustomLink to="/contact"> Contact </CustomLink> 
          </li>
        </button>
        <button className="buttonNav">
          <li> <CustomLink to="/resume"> Resume </CustomLink> </li>
        </button>
        </ul>
      </nav></>
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